const AIService = require('../services/aiService');
const SentimentService = require('../services/sentimentAnalysis');
const CrisisDetectionService = require('../services/crisisDetection');
const Conversation = require('../models/Conversation');

exports.sendMessage = async (req, res) => {
  try {
    const { message, conversationId } = req.body;
    const userId = req.user._id;

    // Get or create conversation
    let conversation = await Conversation.findById(conversationId);
    if (!conversation) {
      conversation = await Conversation.create({
        userId,
        messages: [],
        metadata: {
          platform: req.headers['user-agent']
        }
      });
    }
  

    // Analyze for crisis
    const crisisLevel = CrisisDetectionService.analyze(message);
    if (crisisLevel !== 'none') {
      await CrisisDetectionService.logCrisis(userId, conversation._id, message, crisisLevel);
    }

    // Sentiment analysis
    const sentiment = await SentimentService.analyze(message);

    // AI Response
    const context = {
      recentMessages: conversation.messages.map(msg => msg.content)
    };
    const ai = await AIService.generateResponse(message, context);

    // Append both messages
    conversation.messages.push(
      {
        role: 'user',
        content: message,
        metadata: { sentiment, crisisLevel }
      },
      {
        role: 'assistant',
        content: ai.content,
        metadata: {
          confidence: ai.confidence,
          sentiment
        }
      }
    );
    conversation.lastActivity = new Date();
    await conversation.save();

    res.json({
      success: true,
      message: ai.content,
      conversationId: conversation._id,
      crisisLevel,
      metadata: {
        sentiment,
        confidence: ai.confidence
      }
    });
  } catch (err) {
    console.error('Chat error:', err);
    res.status(500).json({ success: false, error: 'Chat failed' });
  }
};

exports.getConversation = async (req, res) => {
  try {
    const { conversationId } = req.params;
    const userId = req.user._id;

    const conversation = await Conversation.findOne({
      _id: conversationId,
      userId
    });

    if (!conversation) {
      return res.status(404).json({ success: false, error: 'Conversation not found' });
    }

    res.json({
      success: true,
      messages: conversation.messages
    });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Unable to fetch conversation' });
  }
};
