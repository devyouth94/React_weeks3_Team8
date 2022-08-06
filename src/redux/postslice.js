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
  return getPostedFile.data;
});

const _detailPost = createAsyncThunk("posted/detail", async (value) => {
  const getDetailPostedFile = await axios.post(
    "http://localhost:5001/comments",
    value
  );
  return getDetailPostedFile;
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
      // 추가적인 작업을 해야 페이지가 바뀔것 같음.
      // _post에서 넘겨줬던 value값이 action에 들어온것을 확인할 수 있다.
    });
  },
  extraReducers: (builder) => {
    builder.addCase(_getPosted.fulfilled, (state, action) => {
      state.posts = action.payload;
      // 받아온값이 action에 들어왔고 그 값을 state.posts에 넣어준다. >> state값은 action.payload의 값이다.
    });
  },
});

export { _post, _delete, _getPosted, _detailPost };
export const { post } = postslice.actions;
export default postslice.reducer;
