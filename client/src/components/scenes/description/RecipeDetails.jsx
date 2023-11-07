import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./recipedetails.css";

export default function RecipeDetails() {
  const { id } = useParams();

  const { data, isLoading, error } = useSelector(
    (state) => state.recipieData || {}
  );

  const recipeData = data.filter((recipe) => id == recipe.id);
  console.log(recipeData);
  return (
    <Box className="recipe_component">
      {recipeData.map((recipe) => {
        return (
          <Box key={recipe.id} className="recipe_card">
            <h1 className="recipe_title">{recipe.title}</h1>
            <Box component="img" src={recipe.image} className="recipe_img" />
            <Typography className="summary">{recipe.summary}</Typography>
            
            <Box className="ingredients">
              <h2>Ingredients:</h2>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    {`${ingredient.amount} ${ingredient.unit} of ${ingredient.name}`}
                  </li>
                ))}
              </ul>
            </Box>
            <Typography className="instructions">
              {recipe.instructions}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
