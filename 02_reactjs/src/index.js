import React from 'react';
// import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css';
import App from './App';
import { store } from "./lesson-5/store";
// import { todoReducer } from './lesson-5/store/todo/reducer';
// import { ADD_TODO } from './lesson-5/store/todo/actions';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');


//console.log(todoReducer());
//console.log(todoReducer(undefined, {type: ADD_TODO}));
//console.log(todoReducer(undefined, {type: ADD_TODO, payload: {id: 1}}));
//console.log(todoReducer(undefined, {type: ADD_TODO, todo: {id: 1}}));


ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
      <Provider store={store}>
        <App/>
      </Provider>
      
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  rootElement
);