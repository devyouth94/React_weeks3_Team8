import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const _Detailpost = createAsyncThunk("detail/post", async (value, thunkAPI) => {
  try {
    const detailpost = await axios.post("http://localhost:3001/comments", value);
    return thunkAPI.fulfillWithValue(detailpost.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const _getDetailPosted = createAsyncThunk("/detail", async (value, thunkAPI) => {
  try {
    const getDetail = await axios.get(`http://localhost:3001/comments?postId=${value}`);
    return thunkAPI.fulfillWithValue(getDetail.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const _deleteDetailPosted = createAsyncThunk("/delete", async (value, thunkAPI) => {
  try {
    await axios.delete(`http://localhost:3001/comments/${value}`);
    return thunkAPI.fulfillWithValue(value);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const _editDetailPosted = createAsyncThunk("detail/edit", async (value, thunkAPI) => {
  try {
    const putvalue = {
      title: value.title,
      contents: value.contents,
      pswd: value.pswd,
      postId: value.postId,
    };
    const getData = await axios.put(`http://localhost:3001/comments/${value.id}`, putvalue);
    return thunkAPI.fulfillWithValue(getData.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [_getDetailPosted.fulfilled]: (state, action) => {
      state.posts = action.payload;
    },
    [_getDetailPosted.rejected]: (state, action) => {
      state.posts = [];
    },

    [_Detailpost.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
    },
    [_Detailpost.rejected]: (state, action) => {
      state.posts = [];
    },

    [_deleteDetailPosted.fulfilled]: (state, action) => {
      const result = state.posts.filter((value) => {
        return value.id != action.payload;
      });
      state.posts = result;
    },
    [_deleteDetailPosted.rejected]: (state, action) => {
      state.posts = [];
    },

    [_editDetailPosted.fulfilled]: (state, action) => {
      const result = state.posts.filter((value) => {
        return value.id !== action.payload.id;
      });
      result.push(action.payload);
      state.posts = result;
    },
  },
});

export { _Detailpost, _getDetailPosted, _deleteDetailPosted, _editDetailPosted };
export const { commentsdelete } = commentsSlice.actions;
export default commentsSlice.reducer;
