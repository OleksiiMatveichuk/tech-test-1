import { createSelector } from "@reduxjs/toolkit";

export const selectSubscribe = (state) => state.tweeter.subscribe;
export const selectUsers = (state) => state.tweeter.users;
export const selectTumbler = (state) => state.tweeter.tumbler;

export const selectFilterFriends = createSelector(
  [selectUsers, selectSubscribe],
  (users, filterId) => {
    return users.filter((user) => !filterId.includes(user.id));
  }
);

export const selectFilterUsers = createSelector(
  [selectUsers, selectSubscribe],
  (users, filterId) => {
    return users.filter((user) => filterId.includes(user.id));
  }
);
