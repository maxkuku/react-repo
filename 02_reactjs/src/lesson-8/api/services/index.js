import { getPaginationParams, getUserByIdPath, getUsersPath, getUsersPathAndPage } from "../endpoints"

export const api = {
    //getUsers: () => fetch(getUsersPath()),
    getUsers: (page, per_page) => fetch(getPaginationParams(page, per_page)(getUsersPath())),
    getUsersPage: (page) => fetch(getUsersPathAndPage(page)),
    getUserById: (userId) => fetch(getUserByIdPath(userId)),

}