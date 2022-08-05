import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const _post = createAsyncThunk("", async () => {});

const _delete = createAsyncThunk("", async () => {});

const postslice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    post: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(_post.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(_post.fulfilled, (state, action) => {
      state.status = "Complited";
    });
    builder.addCase(_post.rejected, (state, action) => {
      state.status = "Fail";
    });
  },
});

export { _post, _delete };
export const { post } = postslice.actions;
export default postslice.reducer;
