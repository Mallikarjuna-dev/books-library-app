const getAllBooks = require("../controllers/bookController");
const express = require("../controllers/bookController");
const router = express.Router();

router.get("/", getAllBooks);

module.exports = router;