import './App.css';
import { createContext, useState, useMemo, useEffect, useContext } from 'react';
import { MessageForm } from './components';
import { Button, createTheme, ThemeProvider, useTheme, IconButton} from '@mui/material';
import { styled } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'







const ColorModeContext = createContext({
  toggleColorMode: () => {},
})




const getDesignTokens = (mode) => ({
  palette: {
      mode,
      ...(mode === 'light'
      ? {
        primary: {
          main: '#efefef',
          backgroundColor: '#efefef',
          contrastText: '#222222',
      },
      // никак не получается изменить бэкграунд страницы
      // тема применяется только к кнопке и больше ни к чему
      }
      : {
        primary: {
          main: '#343434',
          backgroundColor: '#343434',
          contrastText: 'white',
      }
      })
  },
})




const ToggleTheme = () => {

  const theme = useTheme();

  const colorMode = useContext(ColorModeContext);

  return <div>
      {/** mode: {theme.palette.mode} <br/> */}
      <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' && <Brightness7Icon/>}
          {theme.palette.mode === 'light' && <Brightness4Icon/>}
      </IconButton>
  </div>
}








function App() {


  const [messages, setMessasge] = useState([]);


  const [search, setSearch] = useState('');


  const [mode, setMode] = useState('light');




  const colorMode = useMemo(() => {
    return {
        toggleColorMode: () => {
            setMode((prevMode) => {
                return prevMode === 'light' ? 'dark' : 'light';
            })
        }
      }
  },[])



  const theme = useMemo(() => createTheme(getDesignTokens(mode)),[mode])




// Search

  const filteredMessages = useMemo( () => {

    // console.log('filteredMessages useMemo')

      if(search === ''){
        return messages
      }

      return messages.filter( (item) => item.message.indexOf( search ) !== -1)
    }, [search, messages] 
  )


// Answers

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
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>  
    <div className="App">


      <div className="ButtonWrap">
        <ToggleTheme/>
      </div>


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
    </ThemeProvider>
  </ColorModeContext.Provider>  
  );
}

export default App;
