const express = require("express");
const { getMyBooks, addMyBook, updateStatus, updateRating } = require("../controllers/myBooksController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getMyBooks);
router.post("/:bookId", protect, addMyBook);
router.patch("/:bookId/status", protect, updateStatus);
router.patch("/:bookId/rating", protect, updateRating);

module.exports = router;
