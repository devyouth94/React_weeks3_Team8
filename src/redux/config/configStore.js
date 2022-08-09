import { configureStore } from "@reduxjs/toolkit";
import detail from "../slices/detailSlice";
import postReducer from "../postslice";
import commentsSlice from "../commentsSlice";
import posts from "../postslice";
import writeList from "../writeSlice";

const store = configureStore({
  reducer: {
    detail,
    posts,
    comments: commentsSlice,
  },
});

export default store;
