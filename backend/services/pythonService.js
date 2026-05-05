const { spawn } = require('child_process');
const path = require('path');

function evaluateWithPython(userAnswer, expectedAnswers, options = {}) {
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
      expected_answers: expectedAnswers,
      question: options.question,
      round: options.round,
      role: options.role,
    });

    const child = spawn(pythonBin, ['services/api_gateway.py'], {
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
        reject(
          new Error(
            stderr.trim() || `Python process exited with code ${code}`
          )
        );
        return;
      }

      const line = stdout.trim().split(/\r?\n/).pop();
      if (!line) {
        reject(new Error(`Python returned no output`));
        return;
      }

      if (line.trim().startsWith('{')) {
        try {
          const parsed = JSON.parse(line);
          resolve(parsed);
          return;
        } catch (e) {
        }
      }

      const score = parseFloat(line);
      if (Number.isNaN(score)) {
        reject(
          new Error(
            `Could not parse evaluation from Python output: ${JSON.stringify(
              stdout
            )}`
          )
        );
        return;
      }
      resolve(score);
    });

    child.stdin.write(payload, 'utf8');
    child.stdin.end();
  });
}

module.exports = { evaluateWithPython };
