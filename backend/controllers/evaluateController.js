const { spawn } = require('child_process');
const path = require('path');

async function evaluate(req, res) {
  try {
    const { user_answer, question, question_data, round } = req.body;

    if (!user_answer || !question) {
      return res.status(400).json({
        error: 'Missing required fields: user_answer and question'
      });
    }

    const isTechnical = round === 'technical' || 
                       (question_data && question_data.type === 'coding') ||
                       (question_data && question_data.topics && 
                        question_data.topics.some(t => ['DSA', 'OS', 'DBMS', 'Networks', 'OOP', 'DAA'].includes(t)));

    const isHR = round === 'hr' || 
                 (question_data && question_data.type === 'behavioral') ||
                 (question_data && question_data.category === 'hr');

    let result;
    
    if (isTechnical) {
      result = await runTechnicalEvaluator(user_answer, question, question_data);
    } else if (isHR) {
      result = await runEnhancedHREvaluator(user_answer, question, question_data);
    } else {
      result = await runTechnicalEvaluator(user_answer, question, question_data);
    }

    if (question_data && question_data.type === 'theoretical' && question_data.expectedPoints) {
      result.expected_answer = {
        points: question_data.expectedPoints,
        solution_approach: question_data.solutionApproach || null,
        hint: question_data.hint || null
      };
    }

    result.vocabulary_analysis = analyzeVocabulary(user_answer);

    result.detailed_analysis = generateDetailedAnalysis(result, user_answer, question_data);

    res.json(result);
  } catch (error) {
    console.error('Evaluation error:', error);
    res.status(500).json({
      error: 'Evaluation failed',
      message: error.message,
      score: 0,
      feedback: 'Unable to evaluate answer due to system error. Please try again.'
    });
  }
}

function analyzeVocabulary(answer) {
  const words = answer.toLowerCase().split(/\s+/);
  const uniqueWords = new Set(words);
  
  const weakWords = ['thing', 'stuff', 'nice', 'good', 'bad', 'very', 'really', 'just', 'like', 'um', 'uh'];
  const foundWeakWords = weakWords.filter(w => words.includes(w));
  
  const technicalIndicators = ['implement', 'architecture', 'optimize', 'algorithm', 'structure', 'design', 'pattern', 'scalable', 'efficient'];
  const foundTechnical = technicalIndicators.filter(w => words.includes(w));
  
  const diversityScore = Math.round((uniqueWords.size / words.length) * 100);
  
  const suggestions = [];
  if (foundWeakWords.length > 0) {
    suggestions.push(`Consider replacing weak words like "${foundWeakWords.slice(0, 3).join(', ')}" with more specific terms`);
  }
  if (diversityScore < 40) {
    suggestions.push('Try to vary your vocabulary more to demonstrate depth of knowledge');
  }
  if (words.length < 30) {
    suggestions.push('Your answer is quite brief. Consider elaborating with more detail');
  }
  
  return {
    word_count: words.length,
    unique_words: uniqueWords.size,
    diversity_score: diversityScore,
    weak_words_found: foundWeakWords,
    technical_terms_found: foundTechnical,
    suggestions: suggestions
  };
}

function generateDetailedAnalysis(result, userAnswer, questionData) {
  const analysis = {
    strengths: [],
    improvements: [],
    approach_assessment: '',
    interviewer_preference: ''
  };
  
  const score = result.score || 0;
  
  if (score >= 80) {
    analysis.strengths.push('Excellent understanding of core concepts');
    analysis.strengths.push('Clear and structured explanation');
    analysis.interviewer_preference = 'Strong hire - demonstrates deep knowledge and communication skills';
  } else if (score >= 60) {
    analysis.strengths.push('Good grasp of fundamental concepts');
    analysis.strengths.push('Reasonable communication ability');
    analysis.interviewer_preference = 'Hire with reservations - solid foundation but needs some guidance';
  } else if (score >= 40) {
    analysis.strengths.push('Basic understanding present');
    analysis.interviewer_preference = 'Consider for junior role - requires significant mentorship';
  } else {
    analysis.improvements.push('Review fundamental concepts more thoroughly');
    analysis.improvements.push('Practice structured communication of technical ideas');
    analysis.interviewer_preference = 'Not recommended - significant knowledge gaps identified';
  }
  
  if (questionData && questionData.type === 'theoretical') {
    if (score >= 70) {
      analysis.approach_assessment = 'Your approach demonstrates systematic thinking and good coverage of key concepts';
    } else if (score >= 50) {
      analysis.approach_assessment = 'Your approach shows some understanding but misses key aspects or connections between concepts';
    } else {
      analysis.approach_assessment = 'Your approach needs restructuring - consider starting with fundamentals and building up systematically';
    }
  }
  
  if (questionData && questionData.expectedPoints && result.missing_points) {
    const missingCount = result.missing_points.length;
    if (missingCount > 0) {
      analysis.improvements.push(`Address ${missingCount} key concepts you missed: ${result.missing_points.slice(0, 3).join(', ')}`);
    }
  }
  
  return analysis;
}

function runTechnicalEvaluator(userAnswer, question, questionData) {
  return new Promise((resolve, reject) => {
    const projectRoot = path.join(__dirname, '..');
    const mlDir = path.join(projectRoot, 'ml');
    const pythonBin = process.env.PYTHON_BIN || 'python3';
    const localPythonPackages = path.join(projectRoot, '.python-packages');
    
    const env = {
      ...process.env,
      PYTHONPATH: `${localPythonPackages}${path.delimiter}${process.env.PYTHONPATH || ''}`,
    };

    const payload = JSON.stringify({
      user_answer: userAnswer,
      question: question,
      question_data: questionData || {}
    });

    const child = spawn(pythonBin, ['technical_evaluator.py'], {
      cwd: mlDir,
      env,
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });

    child.on('error', (err) => {
      reject(new Error(`Failed to start Python: ${err.message}`));
    });

    child.on('close', (code) => {
      if (code !== 0) {
        console.error('Technical evaluator stderr:', stderr);
        resolve({
          score: 50,
          feedback: 'Evaluation completed with warnings.',
          answer_type: 'unknown',
          debug: { error: stderr || 'Non-zero exit code' }
        });
        return;
      }

      try {
        const lines = stdout.trim().split(/\r?\n/);
        const lastLine = lines[lines.length - 1];
        
        if (lastLine && lastLine.trim().startsWith('{')) {
          const result = JSON.parse(lastLine);
          resolve(result);
        } else {
          reject(new Error('Invalid output format from evaluator'));
        }
      } catch (e) {
        reject(new Error(`Failed to parse evaluator output: ${e.message}`));
      }
    });

    child.stdin.write(payload, 'utf8');
    child.stdin.end();
  });
}

function runHREvaluator(userAnswer, question, questionData) {
  return new Promise((resolve, reject) => {
    const projectRoot = path.join(__dirname, '..');
    const mlDir = path.join(projectRoot, 'ml');
    const pythonBin = process.env.PYTHON_BIN || 'python3';
    const localPythonPackages = path.join(projectRoot, '.python-packages');
    
    const env = {
      ...process.env,
      PYTHONPATH: `${localPythonPackages}${path.delimiter}${process.env.PYTHONPATH || ''}`,
    };

    const payload = JSON.stringify({
      user_answer: userAnswer,
      question: question,
      rubric: questionData || {}
    });

    const child = spawn(pythonBin, ['hr_evaluator.py'], {
      cwd: mlDir,
      env,
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });

    child.on('error', (err) => {
      reject(new Error(`Failed to start Python: ${err.message}`));
    });

    child.on('close', (code) => {
      if (code !== 0) {
        console.error('HR evaluator stderr:', stderr);
        resolve({
          score: 50,
          feedback: 'HR evaluation completed with warnings.',
          debug: { error: stderr || 'Non-zero exit code' }
        });
        return;
      }

      try {
        const lines = stdout.trim().split(/\r?\n/);
        const lastLine = lines[lines.length - 1];
        
        if (lastLine && lastLine.trim().startsWith('{')) {
          const result = JSON.parse(lastLine);
          resolve(result);
        } else {
          reject(new Error('Invalid output format from HR evaluator'));
        }
      } catch (e) {
        reject(new Error(`Failed to parse HR evaluator output: ${e.message}`));
      }
    });

    child.stdin.write(payload, 'utf8');
    child.stdin.end();
  });
}

function runEnhancedHREvaluator(userAnswer, question, questionData) {
  return new Promise((resolve, reject) => {
    const projectRoot = path.join(__dirname, '..');
    const mlDir = path.join(projectRoot, 'ml');
    const pythonBin = process.env.PYTHON_BIN || 'python3';
    const localPythonPackages = path.join(projectRoot, '.python-packages');
    
    const env = {
      ...process.env,
      PYTHONPATH: `${localPythonPackages}${path.delimiter}${process.env.PYTHONPATH || ''}`,
    };

    const payload = JSON.stringify({
      user_answer: userAnswer,
      question: question,
      expected_answer: questionData?.expectedAnswer || null,
      question_data: questionData || {}
    });

    const child = spawn(pythonBin, ['hr_evaluator_enhanced.py'], {
      cwd: mlDir,
      env,
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });

    child.on('error', (err) => {
      reject(new Error(`Failed to start Python: ${err.message}`));
    });

    child.on('close', (code) => {
      if (code !== 0) {
        console.error('Enhanced HR evaluator stderr:', stderr);
        resolve({
          score: 50,
          is_correct: false,
          confidence_level: 'Medium',
          components: {
            correctness: { score: 50 },
            completeness: { score: 50 },
            vocabulary: { score: 50 },
            confidence: { score: 50 }
          },
          feedback: ['HR evaluation completed with basic scoring.'],
          improvement_hints: [],
          expected_answer: { how_to_answer: [] }
        });
        return;
      }

      try {
        const lines = stdout.trim().split(/\r?\n/);
        const lastLine = lines[lines.length - 1];
        
        if (lastLine && lastLine.trim().startsWith('{')) {
          const result = JSON.parse(lastLine);
          resolve(result);
        } else {
          reject(new Error('Invalid output format from enhanced HR evaluator'));
        }
      } catch (e) {
        reject(new Error(`Failed to parse enhanced HR evaluator output: ${e.message}`));
      }
    });

    child.stdin.write(payload, 'utf8');
    child.stdin.end();
  });
}

module.exports = { evaluate };
