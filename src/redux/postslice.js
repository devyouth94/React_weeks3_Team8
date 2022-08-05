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
// ref.current.value값으로 받아온 3개가 value에 들어갔다.
// axios post로 url에 value를 넣어줬다. 그 후 넣었던 값을 가지고 extraReducers의 _post 넘어간다.

const _getPosted = createAsyncThunk("/posted", async () => {
  const getPostedFile = await axios.get("http://localhost:5001/posts");
  return getPostedFile.data;
});
// axios에서 get해서 getPostedFile로 넘겨줬고 그것의 데이터를 extraReducers의 _getPosted로 return해줌. .data를 안해주면 직렬화 안됐다고 애러남

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

export { _post, _delete, _getPosted };
export const { post } = postslice.actions;
export default postslice.reducer;
