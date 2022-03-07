import { api } from "../../api/services";

export const SET_DATA = 'SET_DATA';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';



export const setLoading = (status) => ({
    type: SET_LOADING,
    payload: status
});

export const setError = (status) => ({
    type: SET_ERROR,
    payload: status
});

export const setData = (users) => ({
    type: SET_DATA,
    payload: users
});


//const USERS_API = `https://reqres.in/api/users?page=${page}&per_page=4`;


export const getUsersWithThunk = (page = 1) => async (dispatch) => {

    dispatch(setLoading(true))
    dispatch(setError(false))
    dispatch(setData([]))


    try {
        const response = await api.getUsersPage(page); // ??? 

        if(!response.ok) {
            throw new Error('any error')
        }

        const result = await response.json()

        dispatch(setData(result))
    } catch (e) {
        console.error(e)
        dispatch(setError(true))
    }

    dispatch(setLoading(false))

}