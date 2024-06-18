// ./controllers/loginController.js
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const getRegister = (req, res) => {
  res.render("register");  // register.ejs 렌더링
};

const registerUser = asyncHandler(async (req, res) => {
  const { username, password, password2 } = req.body;
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
  res.render("home");  // home.ejs 렌더링
};

// const loginUser = asyncHandler(async (req, res) => {
//   const { username, password } = req.body;
//   if (username === "admin" && password === "1234") {
//     res.send("Login success");
//   } else {
//     res.send("Login failed");
//   }
// });
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.send("Login success");
  } else {
    res.send("Login failed");
  }
});


module.exports = {  getRegister, registerUser, getLogin, loginUser };
