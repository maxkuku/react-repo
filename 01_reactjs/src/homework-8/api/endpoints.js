import {stringifyUrl} from 'query-string';
export const getAPIEndpoint = () => `https://cat-fact.herokuapp.com`;
export const getUsersPath = () => [getAPIEndpoint(), 'facts'].join('/');
export const getUsersPathAndPage = (pageId) => getUsersPath() + `?page=${pageId}`

// то же самое
export const getPaginationParams = (page = 1, per_page = 6) => (url) => stringifyUrl({
    url,
    query: {
        page,
        per_page
    }
})

export const getUserByIdPath = (id) => [getUsersPath(), id].join('/');

