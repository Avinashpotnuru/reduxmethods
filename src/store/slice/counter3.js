import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice3 = createSlice({
  name: `counter3`,
  initialState: initialState,
  reducers: {
    increamentcount3(state, action) {
      state.value = state.value + 3;
    },
    decreamentcount3(state, action) {
        state.value = state.value -3;
      },
  },
});
export const { increamentcount3 , decreamentcount3} = counterSlice3.actions;
export default counterSlice3.reducer;
