import express from "express";
import { delteRecipe, getAllFavourites, getRecipesBySearch, searchById, searchByKeywords } from "../controllers/searchControllers.js";
import {Auth} from "../middlewares/auth.js";

const router = express.Router();

router.get("/getRecipies",Auth, searchByKeywords);
router.post("/getById", Auth, searchById );
router.get("/getAllFav", Auth, getAllFavourites);
router.delete("/deleteRecipe/:id", Auth, delteRecipe);
router.post("/searchByKeyword", Auth, getRecipesBySearch);


export default router;