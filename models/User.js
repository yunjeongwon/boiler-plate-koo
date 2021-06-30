const mongoose = require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    maxlenth: 50,
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    maxlength: 50,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
