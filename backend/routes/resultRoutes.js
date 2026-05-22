const { protect } = require("../middleware/authMiddleware");
const express = require("express");
const Result = require("../models/Result");

const router = express.Router();

router.post("/save", protect, async (req, res) => {
  try {
    const result = new Result(req.body);
    await result.save();

    res.status(201).json({
      message: "Result saved successfully"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error"
    });
  }
});


router.get("/", async (req, res) => {
  try {
    const results = await Result.find().sort({ createdAt: -1 });
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error"
    });
  }
});

module.exports = router;