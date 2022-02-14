



export const ADD_PROJECT = 'ADD_PROJECT'
export const REMOVE_PROJECT = 'REMOVE_PROJECT'


export const addProjectAction = (project) => ({
    type: ADD_PROJECT,
    payload: project
})


export const removeProjectAction = (projectId) => ({
    type: REMOVE_PROJECT,
    payload: projectId
})
