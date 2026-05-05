const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const SESSIONS_FILE = path.join(__dirname, '..', '..', 'data', 'sessions.json');

function ensureSessionsFile() {
  const dir = path.dirname(SESSIONS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(SESSIONS_FILE)) {
    fs.writeFileSync(SESSIONS_FILE, JSON.stringify([], null, 2));
  }
}

function readSessions() {
  ensureSessionsFile();
  try {
    const data = fs.readFileSync(SESSIONS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading sessions:', err);
    return [];
  }
}

function writeSessions(sessions) {
  ensureSessionsFile();
  try {
    fs.writeFileSync(SESSIONS_FILE, JSON.stringify(sessions, null, 2));
    return true;
  } catch (err) {
    console.error('Error writing sessions:', err);
    return false;
  }
}

router.post('/', (req, res) => {
  const { userId, role, round, answers, scores, totalScore, status } = req.body;

  if (!userId || !round) {
    return res.status(400).json({ error: 'userId and round are required' });
  }

  const sessions = readSessions();
  
  const newSession = {
    id: 'sess_' + Date.now(),
    userId,
    role: role || 'Unknown',
    round,
    answers: answers || [],
    scores: scores || [],
    totalScore: totalScore || 0,
    status: status || 'completed',
    timestamp: new Date().toISOString()
  };

  sessions.push(newSession);
  
  if (!writeSessions(sessions)) {
    return res.status(500).json({ error: 'Failed to save session' });
  }

  return res.status(201).json({ 
    success: true, 
    session: newSession,
    message: 'Session saved successfully'
  });
});

router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const sessions = readSessions();
  
  const userSessions = sessions
    .filter(s => s.userId === userId)
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  
  return res.json({ 
    success: true, 
    sessions: userSessions,
    count: userSessions.length
  });
});

router.get('/:userId/stats', (req, res) => {
  const { userId } = req.params;
  const sessions = readSessions();
  
  const userSessions = sessions.filter(s => s.userId === userId && s.status === 'completed');
  
  if (userSessions.length === 0) {
    return res.json({
      success: true,
      stats: {
        totalSessions: 0,
        averageScore: 0,
        totalHours: 0,
        streak: 0,
        byRound: { aptitude: 0, technical: 0, hr: 0 }
      }
    });
  }
  
  const totalScore = userSessions.reduce((sum, s) => sum + (s.totalScore || 0), 0);
  const avgScore = Math.round(totalScore / userSessions.length);
  
  const byRound = { aptitude: 0, technical: 0, hr: 0 };
  userSessions.forEach(s => {
    if (byRound.hasOwnProperty(s.round)) {
      byRound[s.round]++;
    }
  });
  
  const dates = [...new Set(userSessions.map(s => new Date(s.timestamp).toDateString()))].sort();
  let streak = 0;
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  
  if (dates.includes(today) || dates.includes(yesterday)) {
    streak = 1;
    for (let i = dates.length - 1; i > 0; i--) {
      const curr = new Date(dates[i]);
      const prev = new Date(dates[i-1]);
      const diff = (curr - prev) / 86400000;
      if (diff === 1) streak++;
      else break;
    }
  }
  
  return res.json({
    success: true,
    stats: {
      totalSessions: userSessions.length,
      averageScore: avgScore,
      totalHours: Math.round(userSessions.length * 0.5),
      streak,
      byRound
    }
  });
});

module.exports = router;
