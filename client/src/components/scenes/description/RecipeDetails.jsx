import { Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./recipedetails.css";
import { useEffect } from "react";
import { getRecipeDetailsById } from "../../../service/api";

export default function RecipeDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector(
    (state) => state.recipeDetail || {}
  );

  console.log("recipedetailsdata", data)

  useEffect(() => {
    if(id) {
      dispatch(getRecipeDetailsById({recipeId: id}))
    }
  }, [id]);

  if (isLoading && !data) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "40vh",
        }}
      >
        <Box
          component="img"
          src="https://res.cloudinary.com/dflhxdxgb/image/upload/v1699165242/ezgif.com-crop_2_i2wz48.gif"
        />
      </Box>
    );
  }


  return (
    <Box className="recipe_component">
    {data && ( 
      <Box key={data.id} className="recipe_card">
        <h1 className="recipe_title">{data.title}</h1>
        <Box component="img" src={data.image} className="recipe_img" />
        <Typography className="summary">{data.summary}</Typography>

        <Box className="ingredients">
          <h2>Ingredients:</h2>
          <ul>
            {data.ingredients && data.ingredients.map((ingredient, index) => ( // Check if data.ingredients is defined
              <li key={index}>
                {`${ingredient.amount} ${ingredient.unit} of ${ingredient.name}`}
              </li>
            ))}
          </ul>
        </Box>
        <Typography className="instructions">
          {data.instructions}
        </Typography>
      </Box>
    )}
  </Box>
  );
}
