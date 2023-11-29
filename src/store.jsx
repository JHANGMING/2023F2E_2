import { configureStore } from "@reduxjs/toolkit";
import electionReducer from "./slice/ElectionSlice"
import { postsApi } from "./slice/apiSlice";

export const store= configureStore({
  reducer:{
    election:electionReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(postsApi.middleware),
})