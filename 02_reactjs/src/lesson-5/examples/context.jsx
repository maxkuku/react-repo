import { createContext, useState, useCallback, useContext } from "react"

// чтобы приложение не упало если забудем передать
// и показываем, что контекст имеет параметры
const CounterContext = createContext({
    count: 0,
    increment: () => {},
    decrement: () => {},

})






export const CounterView = () => {
    const {count} = useContext(CounterContext);
    return <div>
        count: {count}
    </div>
}



export const CounterControl = () => {
    const {decrement,increment} = useContext(CounterContext);
    return <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>
}


export const CounterContainer = () => {
    return <div>
        <CounterView />
        <CounterControl />
    </div>
}


export const ContextExample = () => {
    const [ count, setCount ] = useState(0);

    const increment = useCallback(() => {
        setCount((count) => {
            return count + 1
        })
    }, [])

    const decrement = useCallback(() => {
        setCount((count) => {
            return count - 1
        })
    }, [])



    const config = {
        increment,
        decrement,
        count
    }

    return <CounterContext.Provider value={config}>
            <CounterContainer/>
        </CounterContext.Provider>
}