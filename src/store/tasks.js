import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: ++id,
                task: action.payload,
                completed: false
            });
        },
        removeTask: (state, action) => {
            const index = state.findIndex(task => task.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        completeTask: (state, action) => {
            const task = state.find(task => task.id === action.payload);
            if (task) {
                task.completed = true;
            }
        }
    }
})

const { addTask, removeTask, completeTask } = tasksSlice.actions;

export { addTask, removeTask, completeTask };
export default tasksSlice.reducer;