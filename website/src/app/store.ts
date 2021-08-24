import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homePagereducer from "./containers/HomePage/slice";
import reduxLogger from "redux-logger";

export const store = configureStore({
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: homePagereducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
