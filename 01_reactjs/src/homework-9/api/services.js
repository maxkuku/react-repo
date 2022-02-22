import { getPaginationParams, getUserByIdPath, getUsersPath, getUsersPathAndPage } from "./endpoints"

export const api = {
    getUsers: (page, per_page) => fetch(getPaginationParams(page, per_page)(getUsersPath())),
    getUsersPage: (page) => fetch(getUsersPathAndPage(page)),
    getUserById: (userId) => fetch(getUserByIdPath(userId)),

}


// {
//     "_id": "591f9894d369931519ce358f",
//     "__v": 0,
//     "text": "A female cat will be pregnant for approximately 9 weeks - between 62 and 65 days from conception to delivery.",
//     "updatedAt": "2018-01-04T01:10:54.673Z",
//     "deleted": false,
//     "source": "api",
//     "sentCount": 5
// },