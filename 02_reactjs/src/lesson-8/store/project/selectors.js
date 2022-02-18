


export const getProjectsFromReducer = (state) => state.projects;


export const getProjects = (state) => getProjectsFromReducer(state).projects;



export const hasProjectSelector = (projectId) => (state) => getProjects(state).findIndex(({id}) => id.toString() === projectId) !== -1;