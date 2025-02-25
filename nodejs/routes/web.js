import { Router } from "express";
import { createUser, getUser, deleteUser } from "../controller/UserController.js";
import { login, protectedRoute, register } from "../controller/AuthController.js";
const router = Router();


router.get("/", (req, res) => {
    res.send("Hello World");
});
router.get("/user/list", getUser); 
router.post("/user", createUser); 
router.delete("/user/:id/delete", deleteUser);

router.post("/register", register );
router.post("/login", login );
router.get("/protected", protectedRoute );

export  {router};