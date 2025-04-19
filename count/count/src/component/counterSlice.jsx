import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // Tên slice
  initialState: {
    value: 0, // Khởi tạo giá trị
  },
  reducers: {
    increment: (state) => {
      state.value++; // Tăng giá trị
    },
    decrement: (state) => {
      state.value--; // Giảm giá trị
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
