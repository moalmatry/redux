import { createSlice } from "@reduxjs/toolkit";
export interface Counter {
  value: number;
}
const initialState: Counter = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

const counterReducer = counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
export default counterReducer;
