const mongoose = require('mongoose');

// UserLibrary Schema
const userLibrarySchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    book_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    is_favorite: { type: Boolean, default: false },
    rating: { type: Number },
    read_status: { type: String, enum: ['Not Read', 'Reading', 'Read'], default: 'Not Read' },
  }, { timestamps: true });
  
const UserLibrary = mongoose.model('UserLibrary', userLibrarySchema);
  
// Export model
module.exports = UserLibrary;