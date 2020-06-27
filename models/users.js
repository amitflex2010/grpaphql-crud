const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: String,
  name: String,
  email: String,
  age: Number,
  occupation: String,
  skill: { 
    skill_name: String,
    skill_experince: Number
    }
});

module.exports = mongoose.model("users", userSchema);