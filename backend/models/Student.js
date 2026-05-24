const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  isPremium: {
    type: Boolean,
    default: false
  },

  payments: [
    {
      orderId: String,
      paymentId: String,
      amount: Number,
      status: String,
      plan: String,
      purchasedAt: Date
    }
  ],

  premiumStartedAt: {
    type: Date,
    default: null
  },

  premiumExpiresAt: {
    type: Date,
    default: null
  },

  lastPaymentId: {
    type: String,
    default: null
  },

  lastOrderId: {
    type: String,
    default: null
  },

  premiumAmount: {
    type: Number,
    default: 0
  },

  role: {
    type: String,
    default: "student"
  }

}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);