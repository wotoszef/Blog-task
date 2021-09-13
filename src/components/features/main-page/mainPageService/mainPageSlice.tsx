import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import mainPageService from "./mainPageService";
import { RootState } from "../../../../redux/rootReducer";
import {mainPageInitial, postDetailProps} from "./mainPageModel";

const initialState = {
  postsDetails: [],
  postName: "",
} as mainPageInitial;

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return mainPageService.getPosts();
});

export const getCurrentPost = createSelector(
  (state: RootState) => state.mainPage,
  (mainPage: mainPageInitial) => {
    const postIndex = mainPage.postsDetails.findIndex((postDetail: postDetailProps) => {
      return postDetail.title === mainPage.postName;
    });
    if (postIndex !== -1) {
      return mainPage.postsDetails[postIndex];
    }
  }
);

const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {
    setPostName(state, action) {
      state.postName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.postsDetails = action.payload.data;
    });
  },
});

export const { setPostName } = mainPageSlice.actions;
export default mainPageSlice.reducer;
