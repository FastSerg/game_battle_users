import { configureStore } from "@reduxjs/toolkit";
import popularReduser from "./popularReduser";
import resultsReduser from "./resultsReduser";

export const store = configureStore({
  reducer: {
    popularState:popularReduser,
    // resultState:resultsReduser
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch