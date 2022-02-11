import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTodoAction, removeTodoAction, changeTodoStatus, setFilterByStatusAction } from '../store/todo/actions'

export const ReduxExample = () => {

    const [value, setValue] = useState();
    const [statusFilter, setStatusFilter] = useState(undefined);


    const dispatch = useDispatch();
    const list = useSelector((state) => {
        
        if(state.tasks.filter.status === undefined){
            return state.tasks.list;
        }

        return state.tasks.list.filter(({status}) => status === statusFilter)
    })


    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // dispatch({
        //     type: ADD_TODO,
        //     payload: {
        //         id: Date.now(),
        //         text: value,
        //         status: false,
        //     }
        // })
        dispatch(addTodoAction({
            id: Date.now(),
            text: value,
            status: false,
        }))
    }

    const onChangeStatus = (todoId) => (event) => {
        // dispatch({
        //     type: CHANGE_TODO_STATUS,
        //     payload: {
        //         id: todoId,
        //         status: event.target.checked,
        //     }
        // })
        dispatch(changeTodoStatus(todoId, event.target.checked))
    }

    const onRemove = (todoId) => () => {
        // dispatch({
        //     type: REMOVE_TODO,
        //     payload: todoId,
        // })

        dispatch(removeTodoAction(todoId))
    }


    const onChangeStatusFilter = (status) => () => {
        dispatch(setFilterByStatusAction(status))
    }

    return <div>
        <h1>reduxExample</h1>

        <button onClick={onChangeStatusFilter()}>ALL</button>&nbsp;
        <button onClick={onChangeStatusFilter(false)}>FALSE</button>&nbsp;
        <button onClick={onChangeStatusFilter(true)}>TRUE</button>

        <ul>
            {
                list.map((item) => <li key={item.id}>
                    <input onChange={onChangeStatus(item.id)} type="checkbox" checked={item.status}/>{item.text}
                    <button onClick={onRemove(item.id)}>x</button>
                    </li>)
            }
        </ul>
        <br/>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange} value={value}/>
            <button>save</button>
        </form>

    </div>
}