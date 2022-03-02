import React from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { profileReducer } from "./profile/reducer"
import { messagesReducer } from "./messages/reducer"
import { chatsReducer } from "./chats/reducer"
import { userReducer } from './user/reducer';



const persistConfig = {
    key: 'root',
    storage,
}


const rootReducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
    messages: messagesReducer,
    chats: chatsReducer,
})


// const persistedReducer = persistReducer(persistConfig, rootReducer)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(
    rootReducer, // persistedReducer
    composeEnhancers(applyMiddleware(thunk))
);


// export const persistor = persistStore(store)