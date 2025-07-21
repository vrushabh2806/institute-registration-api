const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema({
  name: { type: String, required: true },
  board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' },
  medium: { type: mongoose.Schema.Types.ObjectId, ref: 'Medium' }
});

module.exports = mongoose.model('School', schoolSchema);
