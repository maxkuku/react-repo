import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTodoAction, removeTodoAction, changeTodoStatus, setFilterByStatusAction } from '../../../../store/todo'
import { getFilteredByStatusTaskList } from '../../../../store/todo'
import { useParams } from 'react-router'
import { hasProjectSelector } from '../../../../store/project/selectors'



export const Tasks = () => {


    const [value, setValue] = useState();
    const {projectId} = useParams();


    const dispatch = useDispatch();

    const list = useSelector(getFilteredByStatusTaskList(projectId))


    const hasProject = useSelector(hasProjectSelector(projectId))
    if(!hasProject){
        return <div>404</div>
    }


    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        dispatch(addTodoAction(projectId, {
            id: Date.now(),
            text: value,
            status: false,
        }))
    }

    const onChangeStatus = (todoId) => (event) => {
        
        dispatch(changeTodoStatus(todoId, event.target.checked))
    }

    const onRemove = (todoId) => () => {

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
                list?.map((item) => <li key={item.id}>
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