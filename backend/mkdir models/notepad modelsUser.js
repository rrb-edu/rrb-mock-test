const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  isPremium: {
    type: Boolean,
    default: false
  },
  premiumStartedAt: Date,
  premiumExpiresAt: Date,
  lastOrderId: String,
  lastPaymentId: String,
  premiumAmount: Number
});

module.exports = mongoose.model("User", userSchema);