import { createSlice } from "@reduxjs/toolkit";
import { getRecipies } from "../service/api";


const initialState = {
    data: [],
    isLoading: false,
    error: null
};


const RecipieSlice = createSlice({
    name: "recipies",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getRecipies.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getRecipies.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        })
        .addCase(getRecipies.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
});



export default RecipieSlice.reducer;