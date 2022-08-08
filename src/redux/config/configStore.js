import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../postslice";
import commentsSlice from "../commentsSlice";

const store = configureStore({
  reducer: { posts: postReducer, comments: commentsSlice },
});

export default store;
