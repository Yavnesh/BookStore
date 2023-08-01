const mongoose = require('mongoose');

// Review Schema
const reviewSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    book_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    rating: { type: Number, required: true },
    comment: { type: String },
  }, { timestamps: true });
  
  const Review = mongoose.model('Review', reviewSchema);
  
  // Export model
module.exports = Review;