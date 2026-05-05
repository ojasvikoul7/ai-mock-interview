const express = require('express');
const router = express.Router();
const { executeCode } = require('../controllers/codeExecutionController');

router.post('/', executeCode);

module.exports = router;
