import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import fullnameReducer from "../features/fullname/fullnameSlice";

export const store = configureStore({
  reducer: {
    fullname: fullnameReducer,
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
