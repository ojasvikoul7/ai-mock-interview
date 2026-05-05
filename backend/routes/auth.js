const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const USERS_FILE = path.join(__dirname, '..', '..', 'data', 'users.json');

function ensureUsersFile() {
  const dir = path.dirname(USERS_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
  }
}

function readUsers() {
  ensureUsersFile();
  try {
    const data = fs.readFileSync(USERS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading users:', err);
    return [];
  }
}

function writeUsers(users) {
  ensureUsersFile();
  try {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    return true;
  } catch (err) {
    console.error('Error writing users:', err);
    return false;
  }
}

router.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required' });
  }

  const users = readUsers();
  if (users.some(u => u.email === email.toLowerCase())) {
    return res.status(409).json({ error: 'Email already registered' });
  }

  const newUser = {
    id: 'user_' + Date.now(),
    name: name.trim(),
    email: email.toLowerCase().trim(),
    password: password,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  
  if (!writeUsers(users)) {
    return res.status(500).json({ error: 'Failed to save user' });
  }

  const { password: _, ...userWithoutPassword } = newUser;
  return res.status(201).json({ 
    success: true, 
    user: userWithoutPassword,
    message: 'Account created successfully'
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const users = readUsers();
  const user = users.find(u => u.email === email.toLowerCase() && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const { password: _, ...userWithoutPassword } = user;
  return res.json({ 
    success: true, 
    user: userWithoutPassword,
    message: 'Login successful'
  });
});


module.exports = router;
