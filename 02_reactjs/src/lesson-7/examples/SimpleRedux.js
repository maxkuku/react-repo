import { useEffect, useState } from "react";

// action
const CHANGE_NAME = 'CHANGE_NAME'
const CHANGE_SETTINGS = 'CHANGE_SETTINGS'



// reducer
const profile = (state = {name: ''}, action) => {
    switch (action.type) {
        case CHANGE_NAME: {
            return {
                name: action.payload,
            }
        }
        default:
            return state;
    }
}




// reducer 2
const settings = (state = {name: ''}, action) => {
    switch (action.type) {
        case CHANGE_SETTINGS: {
            return {
                name: action.payload,
            }
        }
        default:
            return state;
    }
}




// реализация conbine reducer

const combineReducer = (reducers) => {

    return (state,action) => {
        // любой редьюсер возвращает state
        // поэтому надо завести новый объект
        const newState = {};


        // задача найти тот редьюсер,
        // который соответствует переданному экшн

        for(let reducerName in reducers){
            newState[reducerName] = reducers[reducerName](  
                state[reducerName],  // profile: profile,
                action
            )
        }
        return newState;
    }
}




// изменить store можно только через dispatch
// а для dispatch нужны action и reducer
const createStore = (reducer) => {

    let state = {};
    // прослушивает изменения store
    let listener = [];


    const dispatch = (action) => {
        // debugger
        state = reducer(state, action);
        // вызвать все функции прослушки
        // и оповестить заинтересованные функции
        // об изменениях в store
        listener.forEach((fn) => fn());
    }


    // механизм подписки на состояние
    // функция fn будет вызываться всякий раз, когда
    // будут изменения в store
    const subscribe = (fn) => {
        listener.push(fn);
    }


    const getState = () => state;


    return {
        getState,
        dispatch,
        subscribe,
    }
}




const store = createStore(combineReducer({
    profile: profile,
    settings: settings,
}));


console.log(store)

store.subscribe(() => {
   console.log('change!'); 
})


console.log(store.getState())
store.dispatch({
    type: CHANGE_NAME,
    payload: 'foo',
})

console.log(store.getState())



export const SimpleRedux = () => {

    const [state, setState] = useState(false);
    const data = store.getState();

    useEffect(() => {
        store.subscribe(() => {
            console.log('change 4!')
            setState(!state);
        })
    }, )

    return <div>
        <h1>
            SimpleRedux
        </h1>
    </div>
}