const logger = require('../utils/logger');
const CrisisLog = require('../models/CrisisLog');

class CrisisDetectionService {
  constructor() {
    this.keywords = {
      high: ['suicide', 'kill myself', 'end it all'],
      medium: ['hurt myself', 'self harm', 'no point'],
      low: ['alone', 'hopeless', 'worthless']
    };
  }

  analyze(message) {
    const text = message.toLowerCase();
    let score = { high: 0, medium: 0, low: 0 };

    this.keywords.high.forEach(k => { if (text.includes(k)) score.high++; });
    this.keywords.medium.forEach(k => { if (text.includes(k)) score.medium++; });
    this.keywords.low.forEach(k => { if (text.includes(k)) score.low++; });

    if (score.high > 0) return 'high';
    if (score.medium > 0) return 'medium';
    if (score.low > 1) return 'low';
    return 'none';
  }

  async logCrisis(userId, conversationId, message, level) {
    try {
      await CrisisLog.create({
        userId,
        conversationId,
        message,
        crisisLevel: level
      });
    } catch (err) {
      logger.error('Failed to log crisis message:', err);
    }
  }
}

module.exports = new CrisisDetectionService();


