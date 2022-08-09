import { configureStore } from "@reduxjs/toolkit";
import detail from "../slices/detailSlice";
import commentsSlice from "../commentsSlice";
import posts from "../postslice";

const store = configureStore({
  reducer: {
    detail,
    posts,
    comments: commentsSlice,
  },
});

export default store;
