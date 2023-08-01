const mongoose = require('mongoose');

// ReadingProgress Schema
const readingProgressSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    book_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    current_page: { type: Number, required: true },
    total_pages: { type: Number, required: true },
  }, { timestamps: true });
  
  const ReadingProgress = mongoose.model('ReadingProgress', readingProgressSchema);

  // Export model
module.exports = ReadingProgress;
  