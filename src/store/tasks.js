// Action Types
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const COMPLETE_TASK = "COMPLETE_TASK";

// Actions
const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: {
            task: task
        }
    }
}

const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        payload: {
            id: id
        }
    }
}

const completeTask = (id) => {
    return {
        type: COMPLETE_TASK,
        payload: {
            id: id
        }
    }
}

const fetchTodos = () => async (dispatch, getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log('Fetched Data:', response);
    const task = await response.json();
    dispatch(addTask(task.title));
};

export { addTask, removeTask, completeTask, fetchTodos };

// Reducer
let id = 0;
export default function reducer(state = [], action) { 
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                {
                    id: ++id,
                    task: action.payload.task,
                    completed: false
                }
            ];
        case REMOVE_TASK:
            return state.filter(task => task.id !== action.payload.id);
        case COMPLETE_TASK:
            return state.map(task => 
                task.id === action.payload.id 
                ? { ...task, completed: true } 
                : task
            );
        default:
            return state;
    }
}