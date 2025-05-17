const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", "./routes/authRoutes.js")
// app.use("/api/books", "./routes/bookRoutes.js")
// app.use("/api/mybooks", "./routes/myBooksRoutes.js")

// Test route
app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})