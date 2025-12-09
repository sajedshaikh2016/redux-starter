import { configureStore } from '@reduxjs/toolkit';
import TaskReducer from './tasks';
import EmployeeReducer from './employees';

const store = configureStore({ 
    reducer: {
        tasks: TaskReducer,
        employees: EmployeeReducer
    }
});

export default store;