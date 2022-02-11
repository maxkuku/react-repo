

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS'



export const SET_FILETER_BY_STATUS = 'SET_FILETER_BY_STATUS'

export const setFilterByStatusAction = (filterBy) => ({
    type: SET_FILETER_BY_STATUS,
    payload: filterBy,
})




export const addTodoAction = (todo) => ({
    type: ADD_TODO,
    payload: todo,
})


export const removeTodoAction = (todoId) => ({
    type: REMOVE_TODO,
    payload: todoId,
})


export const changeTodoStatus = (todoId, status) => ({
    type: CHANGE_TODO_STATUS,
    payload: {
        id: todoId,
        status
    },
})