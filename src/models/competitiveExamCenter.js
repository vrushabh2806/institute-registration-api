const mongoose = require('mongoose');

const competitiveExamCenterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  exams: [String]  // e.g., ['JEE', 'NEET']
});

module.exports = mongoose.model('CompetitiveExamCenter', competitiveExamCenterSchema);
