const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { getAllBooks, addMyBook, updateStatus, updateRating } = require("../controllers/myBooksController");

router.get("/", protect, getAllBooks);
router.post("/:bookId", protect, addMyBook);
router.patch("/:bookId/status", protect, updateStatus);
router.patch("/:bookId/rating", protect, updateRating);

module.exports = router;