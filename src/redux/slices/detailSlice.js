import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __getDetail = createAsyncThunk("detail/getDetail", async (id, thunkAPI) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/article/${id}`);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __updateDetail = createAsyncThunk("detail/updateDetail", async (payload, thunkAPI) => {
  try {
    const { data } = await axios.patch(`http://localhost:3001/article/${payload.id}`, payload);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __deleteDetail = createAsyncThunk("detail/deleteDetail", async (id, thunkAPI) => {
  try {
    const { data } = await axios.delete(`http://localhost:3001/article/${id}`);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  article: {
    id: 0,
    name: "",
    title: "",
    content: "",
  },
  isLoading: false,
  error: null,
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  extraReducers: {
    // 상세페이지 조회
    [__getDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.article = action.payload;
    },
    [__getDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 상세페이지 수정
    [__updateDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.article = action.payload;
    },
    [__updateDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // 상세페이지 삭제
    [__deleteDetail.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.article = action.payload;
    },
    [__deleteDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default detailSlice.reducer;
