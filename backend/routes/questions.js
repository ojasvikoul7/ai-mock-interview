const express = require('express');
const { listQuestions } = require('../controllers/questionsController');

const router = express.Router();

router.get('/', listQuestions);

module.exports = router;
