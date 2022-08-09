import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
  article: [],
  isLoading: false,
  error: null,
};

const _postArticle = createAsyncThunk("/postarticle", async (value, thunkAPI) => {
  try {
    const data = await axios.post('http://localhost:3001/article', value);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const _getArticle = createAsyncThunk("/getarticle", async (value, thunkAPI) => {
  try {
    const data = await axios.get('http://localhost:3001/article');
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const _delete = createAsyncThunk("", async () => {});

const postslice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [_postArticle.pending]: (state) => {
      state.isLoading = true;
    },
    [_postArticle.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.article = [...state.article, action.payload];
    },
    [_postArticle.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [_getArticle.pending]: (state) => {
      state.isLoading = true;
    },
    [_getArticle.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.article = action.payload;
    },
    [_getArticle.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    
  },
});

export { _postArticle, _getArticle };
export const { post } = postslice.actions;
export default postslice.reducer;
