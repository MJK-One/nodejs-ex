// ./routes/loginRoutes.js
const express = require("express");
const router = express.Router();
const {
  getRegister,
  registerUser,
  getLogin,
  loginUser,
} = require("../controllers/loginController");

// router.get("/register", getRegister);
// router.post("/register", registerUser);
// router.get("/home", getLogin);
// router.post("/home", loginUser);
router.route("/").get(getLogin).post(loginUser); 
router.route("/register").get(getRegister).post(registerUser);
module.exports = router;

