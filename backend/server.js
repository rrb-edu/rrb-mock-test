require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});