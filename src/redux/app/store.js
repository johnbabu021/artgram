import { configureStore } from "@reduxjs/toolkit";
import pathslice from "../features/path/pathslice";
import userslice from "../features/path/userslice";
export const store = configureStore({
  reducer: {
    path: pathslice,
    user: userslice,
  },
});
