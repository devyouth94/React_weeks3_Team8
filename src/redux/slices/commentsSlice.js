import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server_url } from ".";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

const _Detailpost = createAsyncThunk("post/comments", async (value, thunkAPI) => {
  try {
    const detailpost = await axios.post(`${server_url}/comments`, value);
    return thunkAPI.fulfillWithValue(detailpost.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const _getDetailPosted = createAsyncThunk("get/comments", async (value, thunkAPI) => {
  try {
    const getDetail = await axios.get(`${server_url}/comments?postId=${value}`);
    return thunkAPI.fulfillWithValue(getDetail.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const _deleteDetailPosted = createAsyncThunk("delete/comments", async (value, thunkAPI) => {
  try {
    await axios.delete(`${server_url}/comments/${value}`);
    return thunkAPI.fulfillWithValue(value);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const _editDetailPosted = createAsyncThunk("put/comments", async (value, thunkAPI) => {
  try {
    const putvalue = {
      title: value.title,
      contents: value.contents,
      pswd: value.pswd,
      postId: value.postId,
    };
    const getData = await axios.put(`${server_url}/comments/${value.id}`, putvalue);
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
