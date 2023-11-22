import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface currentUser {
  email: string | null
  photoURL: string | null
  displayName: string | null
}

interface initialStateProps {
  firebaseLoading: boolean
  userLoading: boolean
  currentUser: currentUser | null
  isEmailVerified: boolean
}


const initialState: initialStateProps = {
  firebaseLoading: true,
  userLoading: true,
  currentUser: null,
  isEmailVerified: false,
};

const authStateSlice = createSlice({
  name: "authState",
  initialState,
  reducers: {
    setAuthFirebaseLoading: (state, action: PayloadAction<boolean>) => {
      state.firebaseLoading = action.payload;
    },
    setAuthUserLoading: (state, action: PayloadAction<boolean>) => {
      state.userLoading = action.payload;
    },
    setAuthCurrentUser: (state, action: PayloadAction<currentUser | null>) => {
      state.currentUser = action.payload;
    },
    setAuthIsEmailVerified: (state, action: PayloadAction<boolean>) => {
      state.isEmailVerified = action.payload;
    },
  },
});

export const { setAuthCurrentUser, setAuthFirebaseLoading, setAuthIsEmailVerified, setAuthUserLoading } = authStateSlice.actions;

export default authStateSlice.reducer;
