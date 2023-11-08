import { configureStore } from "@reduxjs/toolkit";
import googleReducer from "./authSlice";
import RecipieReducer from "./recipieSlice";
import GetFavouritesReducer from "./favouriteSlice";
import searchReducer from "./searchSlice";
import recipeDetailsReducer from "./recipeDetailSlice";


export const store = configureStore({
    reducer: {
        login: googleReducer,
        recipieData: RecipieReducer,
        favourites: GetFavouritesReducer,
        search: searchReducer,
        recipeDetail: recipeDetailsReducer
    }
});