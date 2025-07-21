const mongoose = require('mongoose');

const standardSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., 1st, 10th, 12th
  description: String
});

module.exports = mongoose.model('Standard', standardSchema);
