import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  display: "",
};

const counterSlice = createSlice({
  name: `counter`,
  initialState: initialState,
  reducers: {
    increamentCount(state, action) {
      state.count = state.count + 1;
    },

    dreceamentCount(state, action) {
      state.count = state.count - 1;
      //n = n + 1
      //n++
    },
    displayName(state, action) {
      state.display = action.payload;
    },
  },
});
export const { increamentCount, dreceamentCount, displayName } =
  counterSlice.actions;

export default counterSlice.reducer;
