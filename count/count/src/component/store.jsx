import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';  // Đảm bảo đúng đường dẫn

export const store = configureStore({
  reducer: {
    counter: counterReducer,  // Đảm bảo tên là 'counter'
  },
});
