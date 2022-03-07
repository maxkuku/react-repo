import { useCallback } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChatList } from "../store/chats/selectors";

import { createChat } from '../helpers'
import {removeChat} from "../store/chats/actions"
import {removeMessageByChatId} from "../store/messages/actions"

import { createChat, removeChat } from "../store/chats/actions";
import { removeMessagesByChatId } from '../store/messages/actions'





export const withChats = (Component) => {

    return (props) => {
        const chats = useSelector(getChatList);
        const dispatch = useDispatch();


        const onCreateChat = useCallback((chatId) => {

            //dispatch(addChat(createChat('chat name')))


            dispatch(createChat('chat name'))
        }, [])


        const onDeleteChat = useCallback((chatId) => {
            dispatch(removeChat(chatId))
            dispatch(removeMessageByChatId(chatId))
        },[])


        return <Component
        {...props}
        chats={chats}
        onCreateChat={onCreateChat}
        onDeleteChat={onDeleteChat}
        />
    }
}