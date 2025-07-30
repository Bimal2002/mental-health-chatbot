const express = require('express');
const router = express.Router();
const { sendMessage, getConversation } = require('../controllers/chatController');
const { authenticate } = require('../middleware/auth');
const { validateChatMessage, validateConversationId } = require('../middleware/validation');
const { chatLimiter } = require('../middleware/rateLimiter');

router.post('/send', authenticate, chatLimiter, validateChatMessage, sendMessage);
router.get('/:conversationId', authenticate, validateConversationId, getConversation);

module.exports = router;
