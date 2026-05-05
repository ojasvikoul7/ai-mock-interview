const express = require('express');
const router = express.Router();
const { evaluateAptitude } = require('../controllers/aptitudeEvaluateController');

router.post('/', evaluateAptitude);

module.exports = router;
