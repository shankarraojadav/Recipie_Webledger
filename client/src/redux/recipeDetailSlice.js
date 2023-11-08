import { createSlice } from "@reduxjs/toolkit";
import { getRecipeDetailsById } from "../service/api";



const initialState = {
    data: [],
    isLoading: false,
    error: null,
};



const recipeDetailSlice = createSlice({
    name: "recipe",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getRecipeDetailsById.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getRecipeDetailsById.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false
        })
        .addCase(getRecipeDetailsById.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })
    }
});


export default recipeDetailSlice.reducer;