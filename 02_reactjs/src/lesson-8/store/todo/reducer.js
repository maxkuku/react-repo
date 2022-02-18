import { ADD_TODO, REMOVE_TODO, CHANGE_TODO_STATUS, SET_FILETER_BY_STATUS } from './actions'


const initialState = {
    tasks: {

    },
    filter: {
        status: undefined,
        search: '',
        sortBy: undefined,
    }
}


export const todoReducer = (state = initialState, action) => {


    switch (action?.type) {
        case SET_FILETER_BY_STATUS: {

            return {
                ...state,
                filter: {
                    ...state.filter,
                    status: action.payload,
                }
            }
        }
        case ADD_TODO: {
            const copyTasks = {...state.tasks};

            copyTasks[action.payload.projectId] = [
                action.payload.task,
                ...(copyTasks[action.payload.projectId] || []),
            ]

            return {
                ...state,
                tasks: copyTasks,
            }
        }
        case REMOVE_TODO: {
            
            return {
                ...state,
                list: state.list.filter((item) => item.id !== action.payload),
            }
        }
        case CHANGE_TODO_STATUS: {
            const copyList = [...state.list];
            const targetTodoIndex = copyList.findIndex(({id}) => action.payload.id === id)
            if(targetTodoIndex === -1){
                return state;
            }

            copyList[targetTodoIndex] = {
                ...copyList[targetTodoIndex],
                ...action.payload,
            }

            return {
                ...state,
                list: copyList,
            }
        }
        default: {
            return state;
        }
    }
}