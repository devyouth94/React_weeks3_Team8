import { configureStore } from "@reduxjs/toolkit";
import detail from "../slices/detailSlice";
import commentsSlice from "../slices/commentsSlice";
import posts from "../slices/postSlice";

const store = configureStore({
  reducer: {
    detail,
    posts,
    comments: commentsSlice,
  },
});

export default store;
