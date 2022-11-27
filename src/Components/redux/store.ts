import { configureStore } from "@reduxjs/toolkit";
import battleReduser from "./battleReduser";
import fetchReposReduser from "./fetchReposReduser";
import optionsSelectedReduser from "./optionsSelectedReduser";
import resultReduser from "./resultReduser";

export const store = configureStore({
  reducer: {
    popularReposState:fetchReposReduser,
    optionsSelected:optionsSelectedReduser,
    battle:battleReduser,
    result:resultReduser
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch