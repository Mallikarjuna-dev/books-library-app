const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email & password required' });
        }

        if (await User.findOne({ email })) {
            return res.status(409).json({ message: 'User already exists' });
        }
        const hashedPass = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            password: hashedPass
        });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res
            .cookie('token', token, { httpOnly: true, sameSite: 'lax' })
            .status(201)
            .json({ message: 'Registered & logged‑in', user: { email } });
    } catch (error) {
        console.error('Register error →', err);
        res.status(500).json({ message: 'Server error' });
    }
};

const login = async (req, res) => {
    try {
        console.log('Request body:', req.body);
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).json({ message: 'Email & password required' });

        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password)))
            return res.status(401).json({ message: 'Wrong credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return res
            .cookie('token', token, { httpOnly: true, sameSite: 'lax' })
            .json({ message: 'Logged in', user: { email: user.email } });
    } catch (err) {
        console.error('Login error →', err);
        return res.status(500).json({ message: 'Server error' });
    }
}

const logout = (req, res) => {
    res.clearCookie("token").json({ message: "Logged out success!" })
}

const getMe = (req, res) => {
    res.json(req.user);
}

module.exports = { register, login, logout, getMe }
