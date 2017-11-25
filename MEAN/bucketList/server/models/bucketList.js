const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BucketListSchema = new mongoose.Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    item: {type: Schema.Types.ObjectId, ref: 'Item'},
    completed: {type: Boolean, default: false}
}, {timestamps: true});

mongoose.model('BucketList', BucketListSchema);