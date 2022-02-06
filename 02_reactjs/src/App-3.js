import { createContext, useState, useMemo, useContext } from 'react';
import './App.css'
import { StylesExample } from './lesson3/StylesExample';
import { RefExample } from './lesson3/RefExample';
import { Button, createTheme, ThemeProvider, useTheme, IconButton} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { MyThemeContext } from './hooks/contextExamole';





// темы
// bareynol.github.io/mui-theme-creator

const ColorModeContext = createContext({
    toggleColorMode: () => {},
})


const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
        ? {
            primary: {
                main: '#ff03c2',
            },
        }
        : {
            primary: {
                main: '#80ffdb'
            }
        })
    },
})


const ToggleTheme = () => {
    const theme = useTheme();

    const colorMode = useContext(ColorModeContext);

    return <div>
        mode: {theme.palette.mode} <br/>
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' && <Brightness7Icon/>}
            {theme.palette.mode === 'light' && <Brightness4Icon/>}
        </IconButton>
    </div>
}





function App() {
    const [list, setList] = useState([]);
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


    const theme = useMemo(() => createTheme(getDesignTokens(mode)),[mode]);


    return (
        <MyThemeContext.Provider value={{theme: 'dark'}}>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <div className='App'>

                        <ToggleTheme/>

                        <br/><br/>

                        <StylesExample/>

                        <br/><br/><br/><br/>

                        <Button onClick={() => {
                            setList([...list, <img key={[Date.now()]} src='https://picsum.photos/200/300' alt='Picsum photos'/>])
                        }}>Add</Button>
                        <RefExample list={list}/>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </MyThemeContext.Provider>
    )
}

export default App;