import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../postslice";

const store = configureStore({
  reducer: { posts: postReducer },
});

export default store;
