import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from '../../app/store'


type fullnameState = {
    value: {
        firstName: string,
        lastName: string
    }
}

const initialState: fullnameState = {
  value: {
    firstName: "",
    lastName: "",
  },
};

export const fullnameSlice = createSlice({
  name: "fullname",
  initialState,
  reducers: {
    changeFirstName: (state, action) => {
      state.value.firstName = action.payload;
    },
    changeLastName: (state, action) => {
      state.value.lastName = action.payload;
    },
  },
});

export const { changeFirstName, changeLastName } =
  fullnameSlice.actions;

export const selectFullname = (state:RootState) => state.fullname.value;

export default fullnameSlice.reducer;