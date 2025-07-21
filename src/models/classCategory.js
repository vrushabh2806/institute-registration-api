const mongoose = require('mongoose');

const classCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String
});

module.exports = mongoose.model('ClassCategory', classCategorySchema);
