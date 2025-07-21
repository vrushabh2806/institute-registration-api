const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board' }
});

module.exports = mongoose.model('College', collegeSchema);
