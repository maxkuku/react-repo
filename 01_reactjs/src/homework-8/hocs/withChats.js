import { useCallback } from "react";
import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChatList } from "../store/chats/selectors";
import { createChat, removeChat } from "../store/chats/actions";
import { removeMessagesByChatId } from '../store/messages/actions'




export const withChats = (Component) => {

    return (props) => {
        const chats = useSelector(getChatList);
        const dispatch = useDispatch();


        const onCreateChat = useCallback((chatId) => {
            dispatch(createChat('chat name'))
        }, [])


        const onDeleteChat = useCallback((chatId) => {
            dispatch(removeChat(chatId))
            dispatch(removeMessagesByChatId(chatId))
        },[])


        return <Component
        {...props}
        chats={chats}
        onCreateChat={onCreateChat}
        onDeleteChat={onDeleteChat}
        />
    }
}