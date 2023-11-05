import express from "express";
import { googleSignin } from "../controllers/userController.js";

const router = express.Router();

router.post("/signin", googleSignin);




export default router;