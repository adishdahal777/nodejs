import { User } from "../model/User.js";

const createUser = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ message: "Invalid request body" });
        }

        const { name, email, number, isAdmin } = req.body;

        if (!name || !email || !number) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const user = new User({ name, email, number, isAdmin });
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
};


export { createUser };