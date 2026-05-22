const mongoose = require("mongoose");

const mockTestSchema = new mongoose.Schema({
  name: String,
  category: String,
  duration: Number,
  negativeMarking: Number,
  premium: Boolean,
  startTime: String,
  endTime: String,
  questions: Array
}, { timestamps: true });

module.exports = mongoose.model("MockTest", mockTestSchema);