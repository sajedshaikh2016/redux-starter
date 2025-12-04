import { createAction, createReducer } from "@reduxjs/toolkit";

const addTask = createAction("ADD_TASK");
const removeTask = createAction("REMOVE_TASK");
const completeTask = createAction("TASK_COMPLETED");
console.log(addTask.type)


const fetchTodos = () => async (dispatch, getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log('Fetched Data:', response);
    const task = await response.json();
    dispatch(addTask(task.title));
};

export { addTask, removeTask, completeTask, fetchTodos };

// Reducer
let id = 0;

export default createReducer([], (builder) => {
    builder
    .addCase(addTask, (state, action) => {
        state.push({
            id: ++id,
            task: action.payload,
            completed: false
        });
    })
    .addCase(removeTask, (state, action) => {
        const index = state.findIndex(task => task.id === action.payload);
        if (index !== -1) {
            state.splice(index, 1);
        }
    })
    .addCase(completeTask, (state, action) => {
        const task = state.find(task => task.id === action.payload);
        if (task) {
            task.completed = true;
        }
    });
})