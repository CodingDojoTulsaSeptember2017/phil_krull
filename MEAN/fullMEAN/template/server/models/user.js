const mongoose = require('mongoose');

// =====================================================================================
// change schema to match model needs
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
}, { timestamps: true });
// =====================================================================================

mongoose.model('User', UserSchema)
