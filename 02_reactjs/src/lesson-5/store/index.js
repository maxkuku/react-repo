import { combineReducers, createStore } from 'redux';
import { todoReducer } from './todo';


export const store = createStore(

    combineReducers({
        tasks: todoReducer,
    }),

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);