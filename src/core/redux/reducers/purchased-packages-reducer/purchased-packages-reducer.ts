import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Array<packageType | null> = [];

const ppSlice = createSlice({
  name: "packagesState",
  initialState,
  reducers: {
    setPackages: (state, action: PayloadAction<Array<packageType | null>>) => {
      return action.payload;
    },
  },
});

export const { setPackages } = ppSlice.actions;

export default ppSlice.reducer;
