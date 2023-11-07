import express from "express";
import { searchById, searchByKeywords } from "../controllers/searchControllers.js";
import {Auth} from "../middlewares/auth.js";

const router = express.Router();

router.get("/getRecipies",Auth, searchByKeywords);
router.post("/getById", Auth, searchById )


export default router;