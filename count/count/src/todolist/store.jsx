import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./totoslice";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    }
});
