import { configureStore } from "@reduxjs/toolkit";
import detail from "../slices/detailSlice";
import postReducer from "../postslice";
import commentsSlice from "../commentsSlice";

const store = configureStore({
  reducer: {
    detail,
    posts: postReducer,
    comments: commentsSlice,
  },
});

export default store;
