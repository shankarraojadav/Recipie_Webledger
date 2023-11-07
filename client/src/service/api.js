import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:4000";

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

    console.log(response)
  } catch (error) {
    console.log(error)
  }
})