import React from 'react'
import { createStore } from 'redux';
import { profileReducer } from "./profile/reducer"



export const store = createStore(profileReducer,
    window.__REXUX_DEVTOOLS_EXTENSION__ && window.__REXUX_DEVTOOLS_EXTENSION__()
);