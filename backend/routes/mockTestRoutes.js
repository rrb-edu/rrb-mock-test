const { protect, adminOnly } = require("../middleware/authMiddleware");
const express = require("express");
const MockTest = require("../models/MockTest");

const router = express.Router();

router.post("/save", protect, adminOnly, async (req, res) => {
  try {
    const mockTest = new MockTest(req.body);
    await mockTest.save();

    res.status(201).json({
      message: "Mock test saved successfully"
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
    const tests = await MockTest.find().sort({ createdAt: -1 });
    res.json(tests);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server error"
    });
  }
});

router.delete(
  "/delete/:id",
  protect,
  adminOnly,
  async (req, res) => {

    try{

      await MockTest.findByIdAndDelete(req.params.id);

      res.json({
        message: "Mock test deleted successfully"
      });

    }
    catch(error){

      console.log(error);

      res.status(500).json({
        message: "Server error"
      });

    }

  }
);


router.put(
  "/update/:id",
  protect,
  adminOnly,
  async (req, res) => {

    try{

      const updatedTest =
        await MockTest.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );

      if(!updatedTest){
        return res.status(404).json({
          message: "Mock test not found"
        });
      }

      res.json({
        message: "Mock test updated successfully"
      });

    }
    catch(error){

      console.log(error);

      res.status(500).json({
        message: "Server error"
      });

    }

  }
);

module.exports = router;