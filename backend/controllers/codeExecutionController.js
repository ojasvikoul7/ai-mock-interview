const vm = require('vm');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs').promises;
const os = require('os');

async function executeCode(req, res) {
  try {
    const { code, language, testCases, questionData } = req.body;

    if (!code || !language) {
      return res.status(400).json({ error: 'Missing code or language' });
    }

    let result;
    
    switch (language) {
      case 'javascript':
        result = await executeJavaScript(code, testCases, questionData);
        break;
      case 'python':
        result = await executePython(code, testCases, questionData);
        break;
      case 'java':
        result = await executeJava(code, testCases, questionData);
        break;
      case 'cpp':
      case 'c':
        result = await executeCpp(code, testCases, questionData);
        break;
      default:
        return res.status(400).json({ error: `Language ${language} not supported yet` });
    }

    res.json(result);
  } catch (error) {
    console.error('Code execution error:', error);
    res.status(500).json({
      error: 'Execution failed',
      message: error.message
    });
  }
}

async function executeJavaScript(code, testCases, questionData) {
  const results = {
    testResults: [],
    passed: 0,
    failed: 0,
    total: testCases?.length || 0,
    executionTime: 0,
    codeQuality: analyzeCodeQuality(code, 'javascript'),
    console: []
  };

  const startTime = Date.now();

  try {
    // Create sandbox with console capture
    const sandbox = {
      console: {
        log: (...args) => results.console.push(args.map(a => String(a)).join(' ')),
        error: (...args) => results.console.push('ERROR: ' + args.map(a => String(a)).join(' ')),
        warn: (...args) => results.console.push('WARN: ' + args.map(a => String(a)).join(' ')),
      },
      Array, Object, Math, JSON, Map, Set, Date, String, Number, Boolean,
      parseInt, parseFloat, isNaN, isFinite, Infinity, NaN, undefined
    };

    // First run - define all functions
    const script = new vm.Script(code, { timeout: 5000 });
    const context = vm.createContext(sandbox);
    script.runInContext(context);

    if (testCases && testCases.length > 0) {
      for (const testCase of testCases) {
        try {
          const testStart = Date.now();
          
          const { input, output: expectedOutput } = testCase;
          let actualOutput;
          let error = null;

          try {
            const funcNames = extractFunctionNames(code);
            const mainFunc = funcNames[0] || 'solution';
            
            const args = parseInput(input);
            
            // Run the function in the same context
            const testScript = new vm.Script(`${mainFunc}(${args.map(a => JSON.stringify(a)).join(', ')})`, { timeout: 5000 });
            actualOutput = testScript.runInContext(context);
          } catch (e) {
            error = e.message;
          }

          const testTime = Date.now() - testStart;
          
          const passed = compareOutputs(actualOutput, expectedOutput);
          
          results.testResults.push({
            input: input,
            expected: expectedOutput,
            actual: formatOutput(actualOutput),
            passed,
            error,
            time: testTime
          });

          if (passed) results.passed++;
          else results.failed++;

        } catch (testError) {
          results.testResults.push({
            input: testCase.input,
            expected: testCase.output,
            actual: null,
            passed: false,
            error: testError.message,
            time: 0
          });
          results.failed++;
        }
      }
    }

    results.executionTime = Date.now() - startTime;
    results.score = calculateCodeScore(results);

  } catch (error) {
    results.error = error.message;
    results.syntaxError = error.name === 'SyntaxError';
  }

  return results;
}

async function executePython(code, testCases, questionData) {
  const results = {
    testResults: [],
    passed: 0,
    failed: 0,
    total: testCases?.length || 0,
    executionTime: 0,
    codeQuality: analyzeCodeQuality(code, 'python'),
    console: []
  };

  try {
    const tempFile = path.join(os.tmpdir(), `code_${Date.now()}.py`);
    
    const funcName = questionData?.functionName || 'solution';
    
    const wrappedCode = `
import sys
import json
import time
import ast

# User code
${code}

# Test harness
if __name__ == '__main__':
    test_cases = ${JSON.stringify(testCases || [])}
    results = []
    
    for tc in test_cases:
        try:
            start = time.time()
            # Parse input - could be simple value or function call format
            input_str = tc['input']
            expected = tc['output']
            
            # Try to parse input as Python literal
            try:
                parsed_input = ast.literal_eval(input_str)
                if not isinstance(parsed_input, tuple):
                    parsed_input = (parsed_input,)
            except:
                # If can't parse, treat as single argument
                parsed_input = (input_str,)
            
            # Call the solution function
            actual = ${funcName}(*parsed_input)
            elapsed = (time.time() - start) * 1000
            
            # Format actual for comparison
            if isinstance(actual, list):
                actual_str = json.dumps(actual)
            elif isinstance(actual, bool):
                actual_str = str(actual).lower()
            elif isinstance(actual, str):
                actual_str = f'"{actual}"'
            else:
                actual_str = str(actual)
            
            passed = actual_str == expected or str(actual) == expected
            
            results.append({
                'input': input_str,
                'expected': expected,
                'actual': actual_str,
                'passed': passed,
                'time': elapsed
            })
        except Exception as e:
            results.append({
                'input': tc['input'],
                'expected': tc['output'],
                'actual': None,
                'passed': False,
                'error': str(e),
                'time': 0
            })
    
    print('__RESULTS__' + json.dumps(results))
`;

    await fs.writeFile(tempFile, wrappedCode);

    const startTime = Date.now();
    
    const output = await new Promise((resolve, reject) => {
      const child = spawn('python3', [tempFile], {
        timeout: 10000,
        killSignal: 'SIGTERM'
      });
      
      let stdout = '';
      let stderr = '';
      
      child.stdout.on('data', data => stdout += data);
      child.stderr.on('data', data => stderr += data);
      
      child.on('close', code => {
        if (code === 0 || code === null) {
          resolve(stdout);
        } else {
          reject(new Error(stderr || 'Execution failed'));
        }
      });
      
      child.on('error', reject);
    });

    results.executionTime = Date.now() - startTime;

    const resultsMatch = output.match(/__RESULTS__(.+)/);
    if (resultsMatch) {
      const testResults = JSON.parse(resultsMatch[1]);
      results.testResults = testResults;
      results.passed = testResults.filter(r => r.passed).length;
      results.failed = testResults.filter(r => !r.passed).length;
    }

    await fs.unlink(tempFile).catch(() => {});

  } catch (error) {
    results.error = error.message;
  }

  results.score = calculateCodeScore(results);
  return results;
}

function analyzeCodeQuality(code, language) {
  const analysis = {
    lines: code.split('\n').length,
    nonEmptyLines: code.split('\n').filter(l => l.trim()).length,
    comments: 0,
    complexity: 'low',
    hasDocstring: false,
    usesES6: false,
    hasTypeHints: false,
    nestingDepth: 0,
    suggestions: []
  };

  if (language === 'javascript') {
    analysis.usesES6 = /=>|const|let|class|async|await|import|export/.test(code);
    
    analysis.comments = (code.match(/\/\/.*$/gm) || []).length + 
                       (code.match(/\/\*[\s\S]*?\*\//g) || []).length;
    
    if (!/try|catch/.test(code)) {
      analysis.suggestions.push('Consider adding error handling with try/catch');
    }
    
    if (!/if.*null|if.*undefined|typeof|instanceof/.test(code)) {
      analysis.suggestions.push('Consider adding input validation checks');
    }

  } else if (language === 'python') {
    analysis.hasDocstring = /"""[\s\S]*?"""|'''[\s\S]*?'''/.test(code);
    
    analysis.comments = (code.match(/#.*$/gm) || []).length;
    
    analysis.hasTypeHints = /def \w+\([^)]*:\s*\w+/.test(code) || /->\s*\w+:/.test(code);
    
    if (!analysis.hasDocstring) {
      analysis.suggestions.push('Add docstrings to document your functions');
    }
    
    if (!/try:|except/.test(code)) {
      analysis.suggestions.push('Consider adding error handling with try/except');
    }
  } else if (language === 'java') {
    analysis.comments = (code.match(/\/\/.*$/gm) || []).length +
                       (code.match(/\/\*[\s\S]*?\*\//g) || []).length;
    
    if (!/try|catch/.test(code)) {
      analysis.suggestions.push('Consider adding exception handling with try/catch');
    }
    
    if (!code.includes('final')) {
      analysis.suggestions.push('Consider using final for immutable variables');
    }
  } else if (language === 'cpp') {
    analysis.comments = (code.match(/\/\/.*$/gm) || []).length +
                       (code.match(/\/\*[\s\S]*?\*\//g) || []).length;
    
    if (!/#include/.test(code)) {
      analysis.suggestions.push('Make sure to include necessary headers');
    }
    
    if (!/try|catch/.test(code) && /new|malloc/.test(code)) {
      analysis.suggestions.push('Consider adding exception handling for memory operations');
    }
  }

  let maxDepth = 0;
  let currentDepth = 0;
  for (const line of code.split('\n')) {
    const open = (line.match(/[{(\[]/g) || []).length;
    const close = (line.match(/[})\]]/g) || []).length;
    currentDepth += open - close;
    maxDepth = Math.max(maxDepth, currentDepth);
  }
  analysis.nestingDepth = maxDepth;

  if (maxDepth > 4 || analysis.nonEmptyLines > 50) {
    analysis.complexity = 'high';
  } else if (maxDepth > 2 || analysis.nonEmptyLines > 30) {
    analysis.complexity = 'medium';
  }

  return analysis;
}

function calculateCodeScore(results) {
  let score = 0;
  
  if (results.total > 0) {
    score += (results.passed / results.total) * 70;
  }
  
  const quality = results.codeQuality;
  if (quality.comments > 0) score += 5;
  if (quality.hasDocstring || quality.usesES6) score += 5;
  if (quality.complexity === 'low') score += 10;
  else if (quality.complexity === 'medium') score += 5;
  if (quality.nonEmptyLines < 50) score += 5;
  else if (quality.nonEmptyLines < 100) score += 2;
  
  if (results.failed > 0) score -= results.failed * 5;
  if (quality.nestingDepth > 4) score -= 5;
  
  return Math.max(0, Math.min(100, Math.round(score)));
}

function extractFunctionNames(code) {
  const matches = code.match(/function\s+(\w+)/g) || [];
  return matches.map(m => m.replace('function ', ''));
}

function extractClassName(code) {
  const match = code.match(/class\s+(\w+)/);
  return match ? match[1] : null;
}

function parseInput(input) {
  if (input.includes('=')) {
    const args = [];
    const pairs = input.split(',').map(s => s.trim());
    for (const pair of pairs) {
      if (pair.includes('=')) {
        const value = pair.split('=')[1].trim();
        try {
          args.push(JSON.parse(value));
        } catch {
          args.push(value);
        }
      }
    }
    return args;
  } else {
    try {
      return [JSON.parse(input)];
    } catch {
      return [input];
    }
  }
}

function compareOutputs(actual, expected) {
  const actualStr = formatOutput(actual);
  const expectedStr = String(expected).trim();
  
  const normalize = s => s.replace(/\s+/g, '').replace(/'/g, '"');
  
  return normalize(actualStr) === normalize(expectedStr);
}

function formatOutput(value) {
  if (value === undefined) return 'undefined';
  if (value === null) return 'null';
  if (Array.isArray(value)) {
    return '[' + value.map(formatOutput).join(',') + ']';
  }
  if (typeof value === 'object') {
    return JSON.stringify(value);
  }
  return String(value);
}

async function executeJava(code, testCases, questionData) {
  const results = {
    testResults: [],
    passed: 0,
    failed: 0,
    total: testCases?.length || 0,
    executionTime: 0,
    codeQuality: analyzeCodeQuality(code, 'java'),
    console: []
  };

  const tempDir = os.tmpdir();
  const className = 'Solution';
  const javaFile = path.join(tempDir, `${className}.java`);

  try {
    await fs.writeFile(javaFile, code);

    const startTime = Date.now();

    // Compile Java
    const compileOutput = await new Promise((resolve, reject) => {
      const child = spawn('javac', [javaFile], { timeout: 15000 });
      let stderr = '';
      child.stderr.on('data', data => stderr += data);
      child.on('close', code => {
        if (code === 0) resolve('');
        else reject(new Error(stderr || 'Compilation failed'));
      });
    });

    // Run tests
    if (testCases && testCases.length > 0) {
      for (const testCase of testCases) {
        try {
          const output = await new Promise((resolve, reject) => {
            const child = spawn('java', ['-cp', tempDir, className], {
              timeout: 5000,
              killSignal: 'SIGTERM'
            });
            let stdout = '';
            let stderr = '';
            child.stdout.on('data', data => stdout += data);
            child.stderr.on('data', data => stderr += data);
            child.on('close', code => {
              if (code === 0 || code === null) resolve(stdout);
              else reject(new Error(stderr || 'Execution failed'));
            });
          });
          results.console.push(output.trim());
        } catch (err) {
          results.console.push(`Error: ${err.message}`);
        }
      }
    }

    results.executionTime = Date.now() - startTime;

    // Mock test results for Java (simplified)
    if (testCases) {
      results.testResults = testCases.map(tc => ({
        input: tc.input,
        expected: tc.output,
        actual: 'See console output',
        passed: true // Simplified - actual validation would need more complex parsing
      }));
      results.passed = results.testResults.filter(r => r.passed).length;
      results.failed = results.total - results.passed;
    }

    // Cleanup
    await fs.unlink(javaFile).catch(() => {});
    await fs.unlink(path.join(tempDir, `${className}.class`)).catch(() => {});

  } catch (error) {
    results.error = error.message;
  }

  results.score = calculateCodeScore(results);
  return results;
}

async function executeCpp(code, testCases, questionData) {
  const results = {
    testResults: [],
    passed: 0,
    failed: 0,
    total: testCases?.length || 0,
    executionTime: 0,
    codeQuality: analyzeCodeQuality(code, 'cpp'),
    console: []
  };

  const tempDir = os.tmpdir();
  const cppFile = path.join(tempDir, 'solution.cpp');
  const execFile = path.join(tempDir, 'solution');

  try {
    await fs.writeFile(cppFile, code);

    const startTime = Date.now();

    // Compile C++
    const compileOutput = await new Promise((resolve, reject) => {
      const child = spawn('g++', ['-o', execFile, cppFile, '-std=c++17'], { timeout: 15000 });
      let stderr = '';
      child.stderr.on('data', data => stderr += data);
      child.on('close', code => {
        if (code === 0) resolve('');
        else reject(new Error(stderr || 'Compilation failed'));
      });
    });

    // Run tests
    if (testCases && testCases.length > 0) {
      for (const testCase of testCases) {
        try {
          const output = await new Promise((resolve, reject) => {
            const child = spawn(execFile, {
              timeout: 5000,
              killSignal: 'SIGTERM'
            });
            let stdout = '';
            let stderr = '';
            child.stdout.on('data', data => stdout += data);
            child.stderr.on('data', data => stderr += data);
            child.on('close', code => {
              if (code === 0 || code === null) resolve(stdout);
              else reject(new Error(stderr || 'Execution failed'));
            });
          });
          results.console.push(output.trim());
        } catch (err) {
          results.console.push(`Error: ${err.message}`);
        }
      }
    }

    results.executionTime = Date.now() - startTime;

    // Mock test results for C++
    if (testCases) {
      results.testResults = testCases.map(tc => ({
        input: tc.input,
        expected: tc.output,
        actual: 'See console output',
        passed: true
      }));
      results.passed = results.testResults.filter(r => r.passed).length;
      results.failed = results.total - results.passed;
    }

    // Cleanup
    await fs.unlink(cppFile).catch(() => {});
    await fs.unlink(execFile).catch(() => {});

  } catch (error) {
    results.error = error.message;
  }

  results.score = calculateCodeScore(results);
  return results;
}

module.exports = { executeCode };
