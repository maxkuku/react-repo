import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { newTodos } from "../store/newTodos";




export const Todos = (props) => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(newTodos.actions.getDataWithThunk)
    }, [])

    return (
        <div>
            Todos. Data is in Redux console tab
        </div>
    )
}