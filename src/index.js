import store from './store/configureStore'
import { addTask, removeTask, completeTask, fetchTodos } from './store/tasks';

const unsubscribe = store.subscribe(() => {
    console.log("State updated:", store.getState());
});

store.dispatch(addTask("Task 1"))
store.dispatch(addTask("Task 2"))
// unsubscribe()
store.dispatch(removeTask(1))
store.dispatch(completeTask(2))
store.dispatch(fetchTodos())