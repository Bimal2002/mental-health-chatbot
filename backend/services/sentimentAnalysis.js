const { pipeline } = require('@xenova/transformers');

let sentimentPipeline = null;

class SentimentService {
  async analyze(text) {
    try {
      // Initialize pipeline once
      if (!sentimentPipeline) {
        console.log("⏳ Loading Xenova sentiment model...");
        sentimentPipeline = await pipeline('sentiment-analysis');
        console.log("✅ Xenova model loaded");
      }

      const output = await sentimentPipeline(text);
      const result = output?.[0];

      if (!result || !result.label || typeof result.score !== 'number') {
        throw new Error("Invalid sentiment output");
      }

      // Extract values
      const label = result.label.toUpperCase();
      const score = parseFloat(result.score.toFixed(4)); // Normalize to 4 decimals
      const sentiment = this.normalizeSentiment(label);
      const intensity = Math.min(Math.ceil(score * 10), 10);
      const emotions = this.detectEmotionKeywords(text);
      const wordCount = text.trim().split(/\s+/).length;
      const isLong = wordCount > 50;

      return {
        sentiment,
        intensity,
        confidence: score,
        emotions,
        wordCount,
        isLong
      };
    } catch (err) {
      console.error("[ERROR] Xenova sentiment failed:", err.message);
      return {
        sentiment: "neutral",
        intensity: 5,
        confidence: 0.5,
        emotions: [],
        wordCount: 0,
        isLong: false
      };
    }
  }

  normalizeSentiment(label) {
    const map = {
      POSITIVE: 'positive',
      NEGATIVE: 'negative',
      NEUTRAL: 'neutral'
    };
    return map[label] || 'neutral';
  }

  detectEmotionKeywords(text) {
    const emotionWords = {
      joy: [
        "happy", "joy", "glad", "grateful", "excited", "cheerful", "amazing", "content",
        "peaceful", "great", "good", "loved", "relaxed", "hopeful", "smiling", "okay"
      ],
      sadness: [
        "sad", "cry", "depressed", "hopeless", "down", "lonely", "hurt", "tired",
        "miserable", "heartbroken", "empty", "bad", "worthless", "pain", "not okay", "unhappy", "lost"
      ],
      anger: [
        "angry", "mad", "furious", "hate", "annoyed", "irritated", "resentful", "rage",
        "frustrated", "enraged", "pissed", "offended"
      ],
      anxiety: [
        "anxious", "worried", "stressed", "nervous", "tense", "overwhelmed", "shaky",
        "panic", "afraid", "uncertain", "uneasy", "restless", "on edge"
      ],
      fear: [
        "scared", "terrified", "fear", "frightened", "dread", "unsafe", "panic",
        "hesitant", "concerned", "trapped", "threatened", "intimidated"
      ],
      shame: [
        "ashamed", "guilty", "embarrassed", "regret", "humiliated", "remorse",
        "inferior", "stupid", "ugly"
      ],
      crisis: [
        "suicide", "kill myself", "end it all", "cutting", "self harm",
        "don’t want to live", "give up", "no point", "ending my life"
      ]
    };
  
    const detected = [];
    const lowerText = text.toLowerCase();
  
    for (const [emotion, keywords] of Object.entries(emotionWords)) {
      for (const word of keywords) {
        if (lowerText.includes(word)) {
          detected.push(emotion);
          break; // Avoid duplicate match per emotion
        }
      }
    }
  
    // Optional fallback
    if (detected.length === 0 && lowerText.includes("bad")) {
      detected.push("sadness");
    }
  
    return [...new Set(detected)]; // Deduplicate
  }
  
}

module.exports = new SentimentService();
