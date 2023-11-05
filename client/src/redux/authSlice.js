import {  createSlice } from "@reduxjs/toolkit";
import { googleAuth } from "../service/api";


const initialState = {
    user: null,
    isLoggedIn: false,
    isLoading: false,
    error: null
};

const AuthSlice = createSlice({
    name: "login",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(googleAuth.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(googleAuth.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
        })
        .addCase(googleAuth.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
});


export default AuthSlice.reducer;