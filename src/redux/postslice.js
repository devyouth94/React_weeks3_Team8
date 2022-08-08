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
  // console.log(getPostedFile);
  return getPostedFile.data;
});

const _detailPost = createAsyncThunk("/detail", async (value) => {
  const getDetailPostedFile = await axios.post(
    "http://localhost:5001/comments",
    value
  );
  return getDetailPostedFile;
});

const _putPosted = createAsyncThunk("detail", async (value) => {
  const putPosted = await axios.put(`http://localhost:5001/posts/${value.id}`, {
    name: "수정",
    title: "수정제목",
    contents: "수정내용",
  });
});

const _delete = createAsyncThunk("detail", async (value) => {
  const deleteposted = await axios.delete(
    `http://localhost:5001/posts/${value.id}`
  );
  return deleteposted.data;
});

const postslice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postdelete: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(_post.fulfilled, (state, action) => {});
  },
  extraReducers: (builder) => {
    builder.addCase(_getPosted.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export { _post, _delete, _getPosted, _detailPost, _putPosted };
export const { postdelete } = postslice.actions;
export default postslice.reducer;
