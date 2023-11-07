import { configureStore } from "@reduxjs/toolkit";
import googleReducer from "./authSlice";
import RecipieReducer from "./recipieSlice";

export const store = configureStore({
    reducer: {
        login: googleReducer,
        recipieData: RecipieReducer
    }
});