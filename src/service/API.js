import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64a1c1fa0079ce56e2db6084.mockapi.io/";

export const getUsers = createAsyncThunk(
  "tweeter/getUsers",
  async (page, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("users", {
        params: {
          page,
          limit: 3,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const putUsersById = createAsyncThunk(
  "tweeter/putUsersById",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`users/${user.id}`, { ...user });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
