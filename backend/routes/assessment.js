const express = require('express');
const router = express.Router();
const assessmentController = require('../controllers/assessmentController');
const { authenticate } = require('../middleware/auth');

// Submit assessment
router.post('/submit', authenticate, assessmentController.submitAssessment);
// Get user assessment history
router.get('/history/:userId', authenticate, assessmentController.getHistory);
// Get user progress for a test type
router.get('/:userId/:testType', authenticate, assessmentController.getProgress);

module.exports = router;
