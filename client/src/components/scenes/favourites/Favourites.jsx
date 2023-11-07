import { Box, IconButton, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllFavourites } from "../../../service/api";
import "../recipieslist/recipieslist.css";
import { DeleteForever } from "@mui/icons-material";
import { deleteRecipe } from "../../../service/api";

export default function Favourites() {
  const { data, isLoading, error } = useSelector(
    (state) => state.favourites || {}
  );

  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFavourites());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteRecipe(id));
    
   
  };

  return (
    <Box className="component">
      {data.map((recipies) => {
        return (
          <Box key={recipies.id} className="card">
            <Box component="img" src={recipies.image} className="card_img" />
            <h1 className="card_title">{recipies.title}</h1>
            <IconButton
              className="delete_btn"
              onClick={() => handleDelete(recipies.id)}
            >
              <DeleteForever />
            </IconButton>
          </Box>
        );
      })}
    </Box>
  );
}
