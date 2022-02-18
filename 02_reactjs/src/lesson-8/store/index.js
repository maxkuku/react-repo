import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { usersReducer } from './users/reducer';
// import { projectReducer } from './project/reducer'
import thunk from "redux-thunk";
import { newTodos } from './newTodos'


const rootReducer = combineReducers({
    users: usersReducer,
    todo: newTodos.reducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(

    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);