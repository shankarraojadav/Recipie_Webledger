import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    data: [],
    isLoading: false,
    error: null
};

const FavouriteSlice = createSlice({
    name: 'favourites',
    initialState,
    extraReducers: (builder) => {
        builder.addCase()
    }
})