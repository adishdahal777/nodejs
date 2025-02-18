import { Router } from "express";
import { createUser } from "../controller/UserController.js";
const router = Router();


router.get("/", (req, res) => {
    res.send("Hello World");
});
router.post("/user", createUser); 

export  {router};