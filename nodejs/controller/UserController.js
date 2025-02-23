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

const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error getting users:", error);
        res.status(500).json({ message: "Error getting users", error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        await user.deleteOne();
        res.status(200).json({ message: "User deleted" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
};

export { createUser, getUser, deleteUser };