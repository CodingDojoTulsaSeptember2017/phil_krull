const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const Schema = mongoose.Schema;

const BikeSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  price: Number,
  location: String,
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
}, { timestamps: true });

BikeSchema.plugin(deepPopulate)
mongoose.model('Bike', BikeSchema);
