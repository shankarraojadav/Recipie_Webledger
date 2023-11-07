import { createSlice } from "@reduxjs/toolkit";
import { deleteRecipe, getAllFavourites } from "../service/api";



const initialState = {
    data: [],
    isLoading: false,
    error: null
};

const FavouriteSlice = createSlice({
    name: 'favourites',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllFavourites.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllFavourites.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        })
        .addCase(getAllFavourites.rejected, (state, action) => {
            state.error = action.error;
            state.isLoading = false;
        })
        .addCase(deleteRecipe.fulfilled, (state, action) => {
            state.data = state.data.filter(recipe => recipe.id !== action.payload)
        })
    }
});

export default FavouriteSlice.reducer;