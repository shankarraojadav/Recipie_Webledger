import axios from "axios";
import Favourites from "../models/favouriteRecipieModel.js";

export const searchByKeywords = async (req, res) => {
  try {
    const numberOfRecipes = 30;

    const apiKey = process.env.Api_Key;
    const apiUrl = `https://api.spoonacular.com/recipes/random?number=${numberOfRecipes}&apiKey=${apiKey}`;

    const result = await axios.get(apiUrl);

    const recipes = result.data.recipes.map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      summary: recipe.summary,
      instructions: recipe.instructions,
      ingredients: recipe.extendedIngredients.map((ingredient) => ({
        name: ingredient.name,
        amount: ingredient.amount,
        unit: ingredient.unit,
      })),
    }));

    res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//search by Id

export const searchById = async (req, res) => {
  try {
    const { recipieId } = req.body;
    const recipeId = recipieId;
    if (recipeId === "undefined") {
      return res
        .status(400)
        .json({ error: "recipeId is missing in the request body" });
    }

    console.log(recipeId);
    const user = req.user;

    const apiKey = process.env.Api_Key;

    const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

    const result = await axios.get(url);
  

    const { id, image, title, summary, instructions } = result.data;

    const favourites ={
      user:user,
      id:id,
      title: title,
      image: image,
      summary: summary,
      instructions:instructions
    }

    await Favourites.insertMany(favourites)

    return res.status(200).json(result.data);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
};
