const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const { Schema } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    maxlenth: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    maxlength: 100,
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

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePwd = function (plainPwd, cb) {
  bcrypt.compare(plainPwd, this.password, function (err, result) {
    if (err) return cb(err);
    return cb(null, result);
  });
};

userSchema.methods.generateToken = function (cb) {
  const user = this;
  jwt.sign(JSON.stringify(user._id), "secretToken", (err, token) => {
    if (err) return cb(err);
    user.token = token;
    user.save((err, user) => {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

userSchema.statics.findByToken = function (token, cb) {
  const user = this;
  jwt.verify(token, "secretToken", function (err, decoded) {
    if (err) return cb(err);
    user.findOne({ _id: JSON.parse(decoded), token: token }, (err, user) => {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
