require("dotenv").config();

const Razorpay = require("razorpay");
const crypto = require("crypto");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const resultRoutes = require("./routes/resultRoutes");
app.use("/api/results", resultRoutes);

const mockTestRoutes = require("./routes/mockTestRoutes");
app.use("/api/mock-tests", mockTestRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected ✅");
})
.catch((err) => {
  console.log(err);
});

app.get("/", (req, res) => {
  res.send("RRB CBT Backend Running 🚀");
});


// CREATE ORDER API
app.post("/create-order", async (req, res) => {
  try {

    const options = {
      amount: 7900,
      currency: "INR",
      receipt: "premium_receipt"
    };

    const order = await razorpay.orders.create(options);

    res.json(order);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Order creation failed"
    });

  }
});


// VERIFY PAYMENT API
app.post("/api/payment/verify", async (req, res) => {

  try {

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      email
    } = req.body;

    const body =
      razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {

      return res.status(400).json({
        success: false,
        message: "Invalid payment signature ❌"
      });

    }

    const premiumExpiry = new Date();

    premiumExpiry.setDate(
      premiumExpiry.getDate() + 30
    );

    const user = await User.findOneAndUpdate(

      { email },

      {
        isPremium: true,
        premiumStartedAt: new Date(),
        premiumExpiresAt: premiumExpiry,
        lastOrderId: razorpay_order_id,
        lastPaymentId: razorpay_payment_id,
        premiumAmount: 79
      },

      { new: true }

    );

    res.json({
      success: true,
      message:
        "Payment verified & premium activated ✅",
      user
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Payment verification failed"
    });

  }

});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});