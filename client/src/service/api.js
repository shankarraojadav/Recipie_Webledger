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
