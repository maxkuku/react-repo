import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChatList } from "../store/chats/selectors";
import { createChat } from '../helpers'
import {
    addChat,
    addChatWithThunk,
    removeChatWithThunk,
    offTrackingAddChatWithThunk,
    offTrackingRemoveChatWithThunk,
    onTrackingAddChatWithThunk,
    onTrackingRemoveChatWithThunk
} from "../store/chats/actions";
import { removeMessagesByChatId, removeMessagesByChatIdWithThunk } from "../store/messages/actions";




export const withChats = (Component) => {

    return (props) => {
        const chats = useSelector(getChatList);
        const dispatch = useDispatch();


        const onCreateChat = useCallback(() => {
            dispatch(addChatWithThunk(createChat('chat name')))
        }, [])


        const onDeleteChat = useCallback((chatId) => {
            dispatch(removeChatWithThunk(chatId))
            dispatch(removeMessagesByChatIdWithThunk(chatId))
        },[])



        useEffect(() => {
            dispatch(onTrackingAddChatWithThunk);
            dispatch(onTrackingRemoveChatWithThunk);

            return () => {
                dispatch(offTrackingAddChatWithThunk);
                dispatch(offTrackingRemoveChatWithThunk);
            }
        }, [])


        return <Component
        {...props}
        chats={chats}
        onCreateChat={onCreateChat}
        onDeleteChat={onDeleteChat}
        />
    }
}