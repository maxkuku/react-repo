import React from 'react';
// import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css';
import App from './App';
import { store } from "./lesson-7/store";
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');


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