import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: 'todos',
  initialState:[],
  reducers:{
    addTodo: (state, action) => {
        const newTask = {
            id: uuidv4(),
            name: action.payload.task,
            completed: action.payload.completed
        }
        state.push(newTask);
    },
    deleteTodo: (state, action) => {
        return state.filter((item) => item.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
        const index = state.findIndex(item => item.id === action.payload.id);
        const updatedState = [...state];
        updatedState[index].name = action.payload.task;
    },
    setTodoStatus: (state, action) => {
        const index = state.findIndex((todo) => todo.id === action.payload.id);
        state[index].completed = action.payload.completed;
    },
}
})

export const { addTodo, deleteTodo, updateTodo, setTodoStatus } = todoSlice.actions;

export default todoSlice.reducer;