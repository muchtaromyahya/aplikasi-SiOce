const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 26,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 64,
  },
  birthdate: {
      type: String,
  },
  sex: {
    type: String,
    required: true,
    min: 9,
    max: 12,
  },
  phone: {
    type: String,
    required: true,
    min: 10,
    max: 12,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 128,
  },
  status: {
    type: String,
    required: true,
  }
},{
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);
