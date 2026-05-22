const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");

const Student = require("../models/Student");

const router = express.Router();

/* =========================
   SIGNUP
========================= */

router.post("/signup", async (req, res) => {

  try{

    const { name, email, password } = req.body;

    let existingStudent =
      await Student.findOne({ email });

    if(existingStudent){
      return res.status(400).json({
        message: "Email already exists"
      });
    }

    let hashedPassword =
      await bcrypt.hash(password, 10);

    let student = new Student({
      name,
      email,
      password: hashedPassword
    });

    await student.save();

    res.status(201).json({
      message: "Signup successful"
    });

  }
  catch(error){

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });

  }

});

/* =========================
   LOGIN
========================= */

router.post("/login", async (req, res) => {

  try{

    const { email, password } = req.body;

    let student =
      await Student.findOne({ email });

    if(!student){
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    let isMatch =
      await bcrypt.compare(password, student.password);

    if(!isMatch){
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }

    if(student.isPremium && student.premiumExpiresAt){
  if(new Date() > new Date(student.premiumExpiresAt)){
    student.isPremium = false;
    student.premiumExpiresAt = null;
    await student.save();
  }
}

let token = jwt.sign(
  {
    id: student._id,
    role: student.role
  },
  process.env.JWT_SECRET,
  { expiresIn: "7d" }
);


    res.json({
  message: "Login successful",
  token: token,
  student: {
  id: student._id,
  name: student.name,
  email: student.email,
  isPremium: student.isPremium,
  role: student.role
}
});

  }
  catch(error){

    console.log(error);

    res.status(500).json({
      message: "Server error"
    });

  }

});

/* =========================
   UPDATE PREMIUM STATUS
========================= */

router.put("/premium/:id", async (req, res) => {
  try {
    const { isPremium } = req.body;

    let expiryDate = null;

    if(isPremium){
      expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30);
    }

    const student = await Student.findByIdAndUpdate(
      req.params.id,
      {
        isPremium: isPremium,
        premiumExpiresAt: expiryDate
      },
      { new: true }
    );

    res.json({
      message: "Premium status updated successfully",
      student
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
router.get("/students", async (req, res) => {
  try {
    const students = await Student.find().select("-password");
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;