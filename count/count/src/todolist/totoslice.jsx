import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos', 
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
            };
            state.push(newTodo);
        },
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
