const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  studentName: String,
  testName: String,
  totalQuestions: Number,
  attempted: Number,
  correct: Number,
  wrong: Number,
  score: Number,
  date: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model("Result", resultSchema);