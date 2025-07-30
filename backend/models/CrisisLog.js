const mongoose = require('mongoose');

const crisisLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  conversationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Conversation',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  crisisLevel: {
    type: String,
    enum: ['low', 'medium', 'high'],
    required: true
  },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('CrisisLog', crisisLogSchema);
