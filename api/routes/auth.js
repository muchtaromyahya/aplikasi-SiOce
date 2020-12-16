const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../model/User");
const { registerValidation, loginValidation } = require("../validation");

// Register
router.post("/register", async (req, res) => {
  // Register Validation
  const { error } = registerValidation(req.body);

  // Throw error validation
  if (error) return res.status(400).json({ error: error.details[0].message });

   // Throw error saat email telah terdaftar
  const isEmailExist = await User.findOne({ email: req.body.email });

  if (isEmailExist)
    return res.status(400).json({ error: "Email telah terdaftar" });

  // Hash
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    birthdate: req.body.birthdate,
    sex: req.body.sex,
    phone: req.body.phone,
    status: req.body.status,
    password,
  });

  try {
    const savedUser = await user.save();
    res.json({ error: null, data: { userId: savedUser._id } });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Login
router.post("/login", async (req, res) => {
  // Login Validation
  const { error } = loginValidation(req.body);

  // Throw Error Validation
  if (error) return res.status(400).json({ error: error.details[0].message });

  const user = await User.findOne({ email: req.body.email });

  // Throw Error saat email salah
  if (!user) return res.status(400).json({ error: "Email atau password salah" });

  // Password Validation
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).json({ error: "Email atau password salah" });

  // Create Javascript Web Token
  const token = jwt.sign(
    // payload data
    {
      name: user.name,
      id: user._id,
    },
    process.env.TOKEN_SECRET, {expiresIn: '1d'}
  );

  res.header("auth-token", token).json({
    error: null,
    data: {
      token,
    },
  });
});

module.exports = router;
