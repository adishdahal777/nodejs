import { Auth } from "../model/Auth.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET; // Store in .env
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await Auth.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new Auth({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

const login = async (req, res) => {
    try {
        console.log(req.body, SECRET_KEY);
        const { email, password } = req.body;

        const user = await Auth.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });

        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

const protectedRoute = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Access denied" });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ message: "Access granted", userId: decoded.id });
    } catch (error) {
        res.status(401).json({ message: "Invalid token" });
    }
}

export { register, login, protectedRoute };