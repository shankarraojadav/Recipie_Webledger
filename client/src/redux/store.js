import { configureStore } from "@reduxjs/toolkit";
import googleReducer from "./authSlice";

export const store = configureStore({
    reducer: {
        login: googleReducer,
    }
});