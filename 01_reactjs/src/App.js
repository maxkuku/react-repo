import React from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
import './App.css';
import { Homework } from './homework-4';

function App() {
  return (
    <div className="App">
      <div className="container">

      <div className="forheader"/>

      <div className='interval'/>

      <header className="App-header">
        <h1>
          Сообщения пользователей
        </h1>
      </header>

        <Homework/>

      </div>
    </div>
  );
}

export default App;
