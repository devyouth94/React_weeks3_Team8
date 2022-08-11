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
  // 배포 환경일때, devTools가 false가 됩니다.
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
