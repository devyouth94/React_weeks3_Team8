import { configureStore } from "@reduxjs/toolkit";
import detail from "../slices/detailSlice";

const store = configureStore({
  reducer: {
    detail,
  },
});

export default store;
