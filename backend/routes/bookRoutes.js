const { getAllBooks } = require("../controllers/bookController");
const express = require("express");
const router = express.Router();

router.get("/", getAllBooks);

module.exports = router;