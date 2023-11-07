import { createSlice } from "@reduxjs/toolkit";
import { searchByKeywords } from "../service/api";


const initialState = {
    data: [],
    isLoading: false,
    error: null
};


const searchSlice = createSlice({
    name: "search",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(searchByKeywords.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(searchByKeywords.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.error = null;
        })
        .addCase(searchByKeywords.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        })
    }
});


export default searchSlice.reducer;