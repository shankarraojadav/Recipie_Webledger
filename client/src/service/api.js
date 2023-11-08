import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 

const url = "https://recipe-6w2j.onrender.com" || "http://localhost:4000";

export const googleAuth = createAsyncThunk(
  "signin",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${url}/signin`, userData);
      return response.data;
    } catch (error) {
        return rejectWithValue("Failed to sign in. Please try again.");
    }
  }
);


// api call to verify token

export const verifyToken = createAsyncThunk(
  "token",
  async (token, { rejectWithValue }) => {
    console.log("token", token)
    try {
      const response = await axios.post(
        `${url}/verifyToken`,
        {},
        {
          headers: {
            Authorization: "Bearer" + token,
            Accept: "application/json",
          },
        }
      );

      // console.log("response",response.data);

      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue("Token verification failed. Please log in again.");
    }
  }
);


// recipies api call

export const getRecipies = createAsyncThunk("recipie", async (_, {rejectWithValue}) => {
  try {
    const token = localStorage.getItem("jwt");

    const response = await axios.get(`${url}/getRecipies`, {
      headers: {
        authorization: "Bearer" + token,
        Accept: "application/json",
      },
    })

    return response.data;
  } catch (error) {
     return rejectWithValue(
       "Failed to fetch recipies data, please try after some time."
     );
  }
})

// get by id

export const getRecipieById = createAsyncThunk("recipieId", async (id, {rejectWithValue}) => {
  const token = localStorage.getItem("jwt");
  console.log(id)
  try {
    const response = await axios.post(`${url}/getById`, id, {
      headers: {
        authorization: "Bearer" + token,
        Accept: "application/json",
      }
    });

    return response.data;
  } catch (error) {
     return rejectWithValue(
       "Failed to fetch recipies data by Id, please try after some time."
     );
  }
});


// get all favourites

export const getAllFavourites = createAsyncThunk("favourites", 
async (_, {rejectWithValue}) => {
  const token = localStorage.getItem('jwt');
  console.log("favoruitesss")
  try {
    const response = await axios.get(`${url}/getAllFav`, {
      headers: {
        authorization: "Bearer" + token,
        Accept: "application/json",
      },
    });
    console.log("favourites",response);
    return response.data;
  } catch (error) {
    console.log(error);
     return rejectWithValue(
       "Failed to fetch fav recipies data, please try after some time."
     );
  }
});


// delete favourite item

export const deleteRecipe = createAsyncThunk("delete", async (id, {rejectWithValue}) => {
  try {
    const token = localStorage.getItem("jwt");

    const response = await axios.delete(`${url}/deleteRecipe/${id}`,  {
      headers: {
        authorization: "Bearer" + token,
        Accept: "application/json"
      }
    });
// console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error);
    return rejectWithValue("Failed to delete Item")
  }
});


// get by keywords

export const searchByKeywords = createAsyncThunk("keywords", async (keyword, {rejectWithValue}) => {
  try {
    const token = localStorage.getItem("jwt");

    const response = await axios.post(`${url}/searchByKeyword`, keyword, {
      headers: {
        authorization: "Bearer" + token,
        Accept: "application/json"
      }
    });

    console.log(response.data)
    return response.data;
    
  } catch (error) {
     return rejectWithValue(
       "Failed to fetch  recipies data by keywords, please try after some time."
     );
  }
});



// recipe information by id;


export const getRecipeDetailsById = createAsyncThunk("recipeDetails", async (id, { rejectWithValue }) => {
  try {
    console.log("one",id)
    const token = localStorage.getItem("jwt");

    const response = await axios.post(`${url}/getRecDetails`, id, {
      headers: {
        authorization: "Bearer" + token,
        Accept: "application/json"
      }
    });

    console.log("reciperes", response.data);
    return response.data
  } catch (error) {
    console.log(error.message)
    return rejectWithValue(
      "Failed to fetch  recipies data by id, please try after some time."
    );
  }
});
