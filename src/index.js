import store from './store/configureStore'
import { addTask, removeTask, completeTask } from './store/tasks';

const unsubscribe = store.subscribe(() => {
    console.log("State updated:", store.getState());
});

store.dispatch(addTask({task: "Task 1"}))
store.dispatch(addTask({task: "Task 2"}))
// unsubscribe()
store.dispatch(removeTask({id: 1}))
store.dispatch(completeTask({id: 2}))