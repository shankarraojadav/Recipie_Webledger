import axios from "axios";



export const searchByKeywords = async (req, res) => {
  try {
    // Specify the number of random recipes you want to retrieve.
    const numberOfRecipes = 100; // You can adjust this number as needed.

    // Make an API call to fetch random recipes.
    const apiKey = process.env.Api_Key;
    const apiUrl = `https://api.spoonacular.com/recipes/random?number=${numberOfRecipes}&apiKey=${apiKey}`;

    const result = await axios.get(apiUrl);

    // Extract and send the random recipes from the API response.
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
export const searchByFilters = async (req, res) => {};

export const getRecipeDetails = async (req, res) => {};
