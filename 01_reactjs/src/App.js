import './App.css';
import { useState, useMemo, useEffect } from 'react';
import { MessageForm } from './components';

function App() {


  const [messages, setMessasge] = useState([]);


  const [search, setSearch] = useState('');



  const filteredMessages = useMemo( () => {

    // console.log('filteredMessages useMemo')

      if(search === ''){
        return messages
      }

      return messages.filter( (item) => item.message.indexOf( search ) !== -1)
    }, [search, messages] 
  )




  useEffect(() => {

    // console.log('subscribe: ', messages)


    // добавим произвольный ответ из заготовленных
    let answers = [
      'Принято!',
      'Вы очень информированы! Спасибо.',
      'Сообщение доставлено получателю.',
      'Спасибо за сообщение'
    ];

    let answer = answers[Math.floor(Math.random()*answers.length)]

    if(messages.length){

      setTimeout(() => {

        document.querySelector('.listWrap ul').insertAdjacentHTML('beforeend', `
        <li class='answer'>
          <div>${answer}</div>
        </li>
        `)

      },1500)

    }

  }, [messages]);



  // вызвать функцию очистки
  useEffect(() => {
    // console.log('did Update')
    return () => {
      // console.log('clear Did Update')
    }
  }, []);



  return (
    <div className="App">
      <div className="container">



      <div className="forheader">
        <input value={search} type="search" onChange={ (event) => {
          setSearch(event.target.value);
        }} placeholder='Поиск'/>
      </div>

      <div className='interval'></div>

      <header className="App-header">
        <h1>
          Сообщения пользователей
        </h1>
      </header>  



      <div className="listWrap">
        <ul>
          {
            filteredMessages.map( (item) => <li>
              <div>{item.message}</div>
              <div className='em alignright'>{item.author}</div>
            </li> )
          }
        </ul>
      </div>



      <div className='interval'></div>

        
      <MessageForm handleSubmit={(formState) => {


      // console.log(formState)


      setMessasge([...messages, formState])

      }} />


      </div>
    </div>
  );
}

export default App;
