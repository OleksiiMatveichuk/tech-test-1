import { createSlice } from "@reduxjs/toolkit";
import { getUsers, putUsersById } from "../service/API";

const initialState = {
  subscribeUsers: [],
  subscribe: [],
  users: [],
  tweets: null,
};

const tweeterSlise = createSlice({
  name: "tweeter",
  initialState,
  reducers: {
    following(state, { payload }) {
      state.subscribe.push(payload);
    },
    unFollowing(state, { payload }) {
      state.subscribe = state.subscribe.filter((el) => el !== payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users.push(...payload);
      })
      .addCase(putUsersById.fulfilled, (state, { payload }) => {
        state.users = state.users.map((el) =>
          el.id === payload.id ? payload : el
        );
      }),
});

export const { following, unFollowing } = tweeterSlise.actions;
export const tweeterReducer = tweeterSlise.reducer;
