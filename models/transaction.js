const mongoose = require('mongoose');

// Transaction Schema
const transactionSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    book_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
    transaction_date: { type: Date, required: true },
    amount: { type: Number, required: true },
  }, { timestamps: true });
  
  const Transaction = mongoose.model('Transaction', transactionSchema);
  
  // Export model
module.exports = Transaction;