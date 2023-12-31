import { useSelector, useDispatch } from "react-redux";
import { Box, IconButton, Typography } from "@mui/material";
import "./recipieslist.css";
import { FavoriteBorder } from "@mui/icons-material";
import { getRecipieById } from "../../../service/api";
import { Link } from "react-router-dom";

export default function RecipiesList() {
  const { data } = useSelector((state) => state.recipieData || {});

  const dispatch = useDispatch();

  console.log("state", data);

  const handleFavourite = (id) => {
    dispatch(
      getRecipieById({
        recipieId: id,
      })
    );
  };
  return (
    <Box className="component">
      {data.map((recipies) => {
        return (
          
            <Box  className="card" key={recipies.id}>
              <Link to={`/recipe/${recipies.id}`} >
              <Box component="img" src={recipies.image} className="card_img" />
              <h1 className="card_title">{recipies.title}</h1>
              </Link>
              <IconButton onClick={() => handleFavourite(recipies.id)}>
                <FavoriteBorder />
              </IconButton>
            </Box>
          
        );
      })}
    </Box>
  );
}
