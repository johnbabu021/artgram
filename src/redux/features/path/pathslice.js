import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  path: "/",
};

export const pathSlice = createSlice({
  name: "path",
  initialState,
  reducers: {
    pathChange: (state, action) => {
      state.path = action.payload;
    },
  },
});

export const { pathChange } = pathSlice.actions;
export default pathSlice.reducer;
