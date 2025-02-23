import { Router } from "express";
import { createUser, getUser, deleteUser } from "../controller/UserController.js";
const router = Router();


router.get("/", (req, res) => {
    res.send("Hello World");
});
router.get("/user/list", getUser); 
router.post("/user", createUser); 
router.delete("/user/:id/delete", deleteUser);

export  {router};