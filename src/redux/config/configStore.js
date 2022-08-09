import { configureStore } from "@reduxjs/toolkit";
import posts from "../postslice";
import writeList from "../writeSlice";
// import writeReducer from "../writeSlice"

const store = configureStore({
  reducer: { 
    posts,
  },
});

export default store;
