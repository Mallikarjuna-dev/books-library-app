const MyBook = require("../models/MyBooks");


const getMyBooks = async (req, res) => {
    try {
        const books = await MyBook.find({ userId: req.user._id }).populate("bookId");
        res.json(books);
    } catch (error) {
        res.ststus(500).json({ message: "Failed to fetch user books!" })
    }
}

const addMyBook = async (req, res) => {
    try {
        const book = await MyBook.create({ userId: req.user._id, bookId: req.params.bookId });
        res.ststus(200).json(book);
    } catch (error) {
        res.ststus(400).json({ message: "Failed to add books!" })
    }
}

const updateStatus = async (req, res) => {
    try {
        const updated = await MyBook.findOneAndUpdate(
            { userId: req.user._id, bookId: req.params.bookId },
            { status: req.body.status },
            { new: true }
        )
        res.json(updated);
    } catch (error) {
        res.ststus(400).json({ message: "Failed to update status!" })
    }
}

const updateRating = async (req, res) => {
    try {
        const updated = await MyBook.findOneAndUpdate(
            { userId: req.user._id, bookId: req.params.bookId },
            { rating: req.body.rating },
            { new: true }
        )
        res.json(updated);
    } catch (error) {
        res.ststus(400).json({ message: "Failed to update rating!" })
    }
}

module.exports = { getMyBooks, addMyBook, updateStatus, updateRating };