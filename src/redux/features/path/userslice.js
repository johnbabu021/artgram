import { createSlice } from "@reduxjs/toolkit";
const local={
    token:undefined,
    user:undefined
}
const initialState = {
  token: JSON.parse((localStorage.getItem("user"))?localStorage.getItem('user'):JSON.stringify(local)).token,
  user: JSON.parse((localStorage.getItem("user"))?localStorage.getItem('user'):JSON.stringify(local)).user,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userToken: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
});

export const { userToken } = UserSlice.actions;
export default UserSlice.reducer;
