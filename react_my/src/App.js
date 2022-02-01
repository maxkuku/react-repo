import './App.css';
import { useState, useMemo, useEffect } from 'react';
import { MessageForm } from './components';

function App() {


  


  const [answers, setAnswer] = useState([]);







  const returnAnswer = useMemo( () => {
    const answers = [
      'Принято!',
      'Вы очень информированы! Спасибо.',
      'Сообщение доставлено получателю.',
      'Спасибо за сообщение'
    ];
    return (
      <li className="answer">
        <div>{ answers[Math.floor(Math.random()*answers.length)] }</div>
        <div align="right" style="em">{"bot"}</div>
      </li>
    )
  }, [answers])








  const [messages, setMessasge] = useState([]);

  return (
    <div className="App">
      <div className="container">

      <header className="App-header">
        <h1>
          Сообщения пользователей
        </h1>
      </header>  
      <div className="listWrap">
        <ul>
          {
            messages.map( (item) => <li>
              <div>{item.message}</div>
              <div className='em alignright'>{item.author}</div>
            </li> )
          }
          {
            answers.map( (item) => <li>
              <div>{item.answer}</div>
              <div className='em alignright'>{"bot"}</div>
            </li> )
          }
        </ul>
      </div>
      <div className='interval'></div>


      <MessageForm handleSubmit={(formState) => {

      setMessasge([...messages, formState])

      setAnswer([...answers])

      }} />


      </div>
    </div>
  );
}

export default App;
