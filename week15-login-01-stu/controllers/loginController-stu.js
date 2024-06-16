// ./controllers/loginController.js
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const getRegister = 



const registerUser = asyncHandler(async (req, res) => {


  if (password === password2) {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: "Register successful", user });
  } else {
    res.send("Register Failed");
  }
});

const getLogin = (req, res) => {


};

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.send("Login success");
  } else {
    res.send("Login failed");
  }
});

module.exports = {                              };
