import express from "express";
import { searchByKeywords } from "../controllers/searchControllers.js";


const router = express.Router();

router.get("/search", searchByKeywords);



export default router;