require("dotenv").config();
const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require("./config/db");

const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const myBooksRoutes = require('./routes/myBooksRoutes');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors({ origin: 'https://books-library-app-five.vercel.app/', credentials: true }));

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/books", bookRoutes)
app.use("/api/mybooks", myBooksRoutes)

// Test route
app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})