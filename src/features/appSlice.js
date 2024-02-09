import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "app",
  initialState: {
    componentsState: {
      about: true,
      home: true,
      contact: false,
    },
  },
  reducers: {
    setComponentsState: (state, value) => {
      state.componentsState = { ...state.componentsState, ...value.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setComponentsState } = counterSlice.actions;

export default counterSlice.reducer;
