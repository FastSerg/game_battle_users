import { configureStore } from "@reduxjs/toolkit";
import fetchReposReduser from "./fetchReposReduser";
import optionsSelectedReduser from "./optionsSelectedReduser";

export const store = configureStore({
  reducer: {
    popularReposState:fetchReposReduser,
    optionsSelected:optionsSelectedReduser
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch