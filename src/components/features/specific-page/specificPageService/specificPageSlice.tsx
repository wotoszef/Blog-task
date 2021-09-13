import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import specificPageService from "./specificPageService";
import { CommentSliceInitial } from "./specificPageModel";

const initialState = {
  commentsDetails: [],
} as CommentSliceInitial;

export const getComments = createAsyncThunk(
  "posts/getComments",
  async (id: number) => {
    return specificPageService.getComments(id);
  }
);

const specificPageSlice = createSlice({
  name: "specificPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.commentsDetails = action.payload.data;
    });
  },
});

export const {} = specificPageSlice.actions;
export default specificPageSlice.reducer;
