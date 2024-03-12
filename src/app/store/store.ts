import { configureStore } from "@reduxjs/toolkit";
import { Api } from "@/app/api";
import localityReducer from "./slices/localitySlice";

export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
    locality: localityReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
