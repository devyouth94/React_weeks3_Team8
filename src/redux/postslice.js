import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const _post = createAsyncThunk("/posted", async (value) => {
  const posted = await axios.post("http://localhost:5001/posts", value);
  return posted.data;
});

const _getPosted = createAsyncThunk("/posted", async () => {
  const getPostedFile = await axios.get("http://localhost:5001/posts");
  // const getPosted = getPostedFile.data;
  return getPostedFile.data;
});

const _delete = createAsyncThunk("", async () => {});

const postslice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    post: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(_post.fulfilled, (state, action) => {
      // console.log(state, action);
    });
  },
  extraReducers: (builder) => {
    builder.addCase(_getPosted.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export { _post, _delete, _getPosted };
export const { post } = postslice.actions;
export default postslice.reducer;
