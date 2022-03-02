import React, { useState, useCallback } from 'react'
import styles from './MessageForm.module.css'



const initialState = {message: '', author: ''}



export const MessageForm = ({handleSubmit}) => {



    const [formState, setFormState] = useState(initialState)



    const resetForm = () => {
        setFormState(initialState)
    }



    const onSubmit = (event) => {

        event.preventDefault();
        
        if(handleSubmit){
            handleSubmit(formState)
        }

        resetForm()
    }




    const onChangeMessage = useCallback((event) => {
        console.log(event.target.value);
        setFormState((formState) => {
            return {
                ...formState,
                message: event.target.value
            }
        }) 
    }, [])






    const onChangeAuthor = useCallback((event) => {
        console.log(event.target.value);
        setFormState((formState) => {
            return {
                ...formState,
                author: event.target.value
            }
        }) 
    }, [])






    return <form id='messageForm' onReset={resetForm} onSubmit={onSubmit}>



        <label><span>Сообщение: </span>
        <input 
        onChange={onChangeMessage} 
        type='text' name='message' value={formState.message}/>
        </label>




        <label><span>Ваше имя: </span>
        <input 
        onChange={onChangeAuthor} 
        type='text' name='author' value={formState.author}/>
        </label>





        <label>
        <button type='reset'>
            Сбросить
        </button>
        
        <button type='submit'>
            Отправить
        </button>
        </label>

    </form>




}