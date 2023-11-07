import express from "express";
import { googleSignin, verifyToken } from "../controllers/userController.js";
import { Auth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/signin", googleSignin);
router.post("/verifyToken",Auth, verifyToken )




export default router;