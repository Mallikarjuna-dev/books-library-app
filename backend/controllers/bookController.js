const Book = require("../models/Book");

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.ststus(500), json({ message: "Failed to fetch books!" });
    }
};

module.exports = getAllBooks;