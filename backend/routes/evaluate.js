const express = require('express');
const { evaluate } = require('../controllers/evaluateController');

const router = express.Router();

router.post('/', evaluate);

module.exports = router;
