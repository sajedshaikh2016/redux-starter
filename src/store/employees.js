import { createSlice } from "@reduxjs/toolkit";

let id = 0;

const employeesSlice = createSlice({
    name: 'employees',
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            state.push({
                id: ++id,
                name: action.payload.name
            });
        }
    }
})

const { addEmployee } = employeesSlice.actions;

export { addEmployee};
export default employeesSlice.reducer;  