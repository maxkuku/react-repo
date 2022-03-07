



export const getTasksFromReducer = (state) => state.tasks;


export const getProjectTasks = (projectId) => (state) => getTasksFromReducer(state).tasks[projectId];



export const getTasksFilter = (state) => getTasksFromReducer(state).filter;


export const getFilteredByStatusTaskList = (projectId) => (state) => {
    
    const list = getProjectTasks(projectId)(state)
    const filter = getTasksFilter(state)

    if(filter.status === undefined) {
        return list;
    }

    return list.filter(({status}) => status === filter.status);
}