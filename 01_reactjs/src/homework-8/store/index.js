import React from 'react';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import storageSession from 'redux-persist/es/storage/session'
import { profileReducer } from "./profile/reducer"
import { messagesReducer } from "./messages/reducer"
import { chatsReducer } from "./chats/reducer"


import { catsReducer } from "../routes/Cats"


//import { animalsReducer } from "./animals"




const persistConfig = {
    key: 'root',
    //storage: storageSession,
    storage,
}


const rootReducer = combineReducers({


    //animals: animalsReducer,


    profile: profileReducer,
    messages: messagesReducer,
    chats: chatsReducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducer)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(
    persistedReducer, // persistReducer
    composeEnhancers(applyMiddleware(thunk))
);


export const persistor = persistStore(store)