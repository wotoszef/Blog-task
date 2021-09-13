import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import mainPageSlice from "../components/features/main-page/mainPageService/mainPageSlice";
import specificPageSlice from "../components/features/specific-page/specificPageService/specificPageSlice";

const authPersistConfig = { key: "main", storage };

const rootReducer = combineReducers({
  mainPage: persistReducer(authPersistConfig, mainPageSlice),
  specificPage: persistReducer(authPersistConfig, specificPageSlice),
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
