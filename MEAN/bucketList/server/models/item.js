const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 5},
    description: {type: String, require: true, minlength: 10},
    created_by: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps: true});

mongoose.model('Item', ItemSchema);