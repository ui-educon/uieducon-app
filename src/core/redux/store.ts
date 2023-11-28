import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
  AnyAction,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import userDataReducer from "./reducers/user-data-reducer/user-data-reducer";
import authStateReducer from "./reducers/auth-state-reducer/auth-state-reducer";
import packageStateReducer from "./reducers/purchased-packages-reducer/purchased-packages-reducer";

// Combined reducers
const combinedReducer = combineReducers({
  userData: userDataReducer,
  authState: authStateReducer,
  packagesState: packageStateReducer,
});

//HYDRATE server redux store with client redux store
const reducer: typeof combinedReducer = (state, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const newState = {
      ...state, // use previous state
      ...action.payload,
    };
    return newState;
  } else {
    return combinedReducer(state, action);
  }
};

// AppStore
export const store = () =>
  configureStore({
    reducer,
    devTools: true,
  });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(store);
