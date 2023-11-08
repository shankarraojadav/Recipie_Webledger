import { Box, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getRecipieById } from "../../../service/api";
import { FavoriteBorder } from "@mui/icons-material";
import "../recipieslist/recipieslist.css";

export default function SearchResults() {
  const { data, isLoading, error } = useSelector((state) => state.search || {});

  console.log("search", data);
  const dispatch = useDispatch();

  const handleFavourite = (id) => {
    dispatch(
      getRecipieById({
        recipieId: id,
      })
    );
  };

  if (isLoading) {
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
    <Box className="component">
      {data.map((recipe) => (
        <Box className="card" key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`} >
            <Box component="img" src={recipe.image} className="card_img" />
            <h1 className="card_title">{recipe.title}</h1>
          </Link>
          <IconButton onClick={() => handleFavourite(recipe.id)}>
            <FavoriteBorder />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
}
