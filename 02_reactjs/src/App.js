import './App.css';
import { LoginForm } from './examples/hooks';
import { useState, useMemo, useEffect } from 'react';
import { useCounter } from './hooks/useCounter';


// <!-- onSubmit в файле examples hooks index.js -->
function App() {

  // пример счетчика
  const {count, increment, decrement} = useCounter();

  // передаем данные формы
  // в корневой компонент App
  // не работает, пишет useState undefined
  // чтоб заработало, надо импортировать useState
  const [users, setUser] = useState([]);

  // для поиска
  const [search, setSearch] = useState('');

  // useMemo запоминает результат вычислений
  const filteredUsers = useMemo( () => {
    console.log('filteredUsers useMemo')

    if(search === ''){
      return users
    }
      return users.filter( (item) => item.login.indexOf( search ) !== -1)
    }, [search, users] 
  )

  // 2 аргумента - фц и массив зависимостей
  // 1 режим работы didMount 
  // useEffect вызывается 1 раз если пустой
  // массив зависимостей, каждый раз, если массива нет
  // и каждый раз при изменении данных, указанных в массиве

  // как правило запросы к серверу
  

  useEffect(() => {
    console.log('didMount')
    // например установить таймер
    setTimeout(() => {
      console.log('setTimeout')
    },1000)
  }, []);




  // 2 вариант работы как didUpdate
  // вызываается каждый раз как идет рендер
  useEffect(() => {
    console.log('didUpdate')
  });


  // 3 вариант: подписаться на изменение переменной и вызывать фц
  useEffect(() => {
    console.log('subscribe: ', search)
  }, [search]);



  // можно прибрать за собой после работы, убрать использованные
  // данные как componentWillUnmount
  // вызвать функцию очистки
  useEffect(() => {
    console.log('did Update')
    return () => {
      console.log('clear Did Update')
    }
  }, []);


  return (
    
    <div className="App">

      <div className="forheader">
        <input value={search} type="search" onChange={ (event) => {
          setSearch(event.target.value);
        }} placeholder='Поиск'/>
      </div>

      <header className="App-header">
        <h1>
          Форма логин пароль
        </h1>
        </header>  

    
        <div className='interval'></div>
        

        <LoginForm handleSubmit={(formState) => {

          // передали в компонент
          // состояние формы
          console.log(formState)

          // общий Стэйт между формой и родителем
          // не работает, чтоб заработало,
          // надо импортировать useState
          setUser([...users, formState])
        }}
        />

        <div className="listWrap">
          <ul>
            {
              filteredUsers.map( (item) => <li>
                <div>{item.login}</div>
                <div>{item.password}</div>
              </li> )
            }
          </ul>
        </div>



        <div className='interval'></div>


        <button onClick={decrement}>decrement</button>
        <span>{count}</span>
        <button onClick={increment}>increment</button>
        
        


    </div>
  );
}

export default App;
