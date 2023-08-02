const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  token:{type: String},
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

// Export model
module.exports = User;