const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { register, login, logout, getMe } = require("../controllers/authControllers");


router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", protect, getMe);

module.exports = router;