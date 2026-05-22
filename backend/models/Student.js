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
  premiumExpiresAt: {
  type: Date,
  default: null
},
  role: {
  type: String,
  default: "student"
}
}, { timestamps: true });

module.exports = mongoose.model("Student", studentSchema);