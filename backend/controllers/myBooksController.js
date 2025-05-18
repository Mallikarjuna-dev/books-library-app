const MyBook = require("../models/MyBook");

const getMyBooks = async (req, res) => {
    try {
        const books = await MyBook.find({ userId: req.user._id }).populate("bookId");
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch user books!" })
    }
}

const addMyBook = async (req, res) => {
    const { bookId } = req.params;
    try {
        const book = await MyBook.create({ userId: req.user._id, bookId });
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ message: "Failed to add books!" })
    }
}

const updateStatus = async (req, res) => {
    const { bookId } = req.params;
    const { status } = req.body;
    try {
        const updated = await MyBook.findOneAndUpdate(
            { userId: req.user._id, bookId },
            { status }
        )
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: "Failed to update status!" })
    }
}

const updateRating = async (req, res) => {
    const { bookId } = req.params;
    const { rating } = req.body;
    try {
        const updated = await MyBook.findOneAndUpdate(
            { userId: req.user._id, bookId },
            { rating }
        )
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: "Failed to update rating!" })
    }
}

module.exports = { getMyBooks, addMyBook, updateStatus, updateRating };