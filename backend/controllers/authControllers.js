const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const register = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ message: "enter credentils!" })
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await User.create({
        email,
        password: hashedPass
    });
    res.status(201).json({ message: "User registered successful!" })
}

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.cookie("token", token, { httpOnly: true }).json({ message: "User logged in successful!" })
    } else {
        return res.status(400).json({ message: "Invalid user data." });
    }
}

const logout = (req, res) => {
    res.clearCookie("token").json({ message: "Logged out success!" })
}

const getMe = (req, res) => {
    res.json(req.user);
}

module.exports = { register, login, logout, getMe }