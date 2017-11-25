const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  postings: [{type: Schema.Types.ObjectId, ref: 'Bike'}]
}, { timestamps: true });

mongoose.model('User', UserSchema);
