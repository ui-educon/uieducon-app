import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: any = {};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<any>) => {
      return action.payload;
    },
  },
});

export const { setUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
