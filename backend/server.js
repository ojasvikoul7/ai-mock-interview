const express = require('express');
const path = require('path');
const cors = require('cors');
const evaluateRoutes = require('./routes/evaluate');
const questionsRoutes = require('./routes/questions');
const authRoutes = require('./routes/auth');
const sessionsRoutes = require('./routes/sessions');
const codeExecutionRoutes = require('./routes/codeExecution');
const aptitudeEvaluateRoutes = require('./routes/aptitudeEvaluate');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: true }));

app.use(express.json({ limit: '1mb' }));

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }
  next(err);
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.use('/auth', authRoutes);
app.use('/sessions', sessionsRoutes);

app.use('/questions', questionsRoutes);
app.use('/evaluate', evaluateRoutes);
app.use('/execute', codeExecutionRoutes);
app.use('/api/aptitude/evaluate', aptitudeEvaluateRoutes);

app.get('/', (req, res) => {
  res.redirect('/setup.html');
});

app.get('/hr', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'hr.html'));
});

app.use(express.static(path.join(__dirname, '..')));

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`AI Mock Interview backend listening on http://localhost:${PORT}`);
  console.log(`Dataset: ${path.join(__dirname, 'dataset', 'questions.json')}`);
});
