import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    addMessageWithThunk, 
    onTrackingAddMessageWithThunk, 
    offTrackingAddMessageWithThunk, 
    onTrackingRemoveMessageWithThunk, offTrackingRemoveMessageWithThunk
} from "../store/messages/actions";
import {getChatMessagesListById} from "../store/messages/selectors";
import {hasChatById} from "../store/chats/selectors";
import {useParams} from "react-router-dom";
import {createMessage} from '../helpers';
import {getUserId} from "../store/user/selectors";





export const withChatMessages = (Component) => {
    return (props) => {
        const {chatId} = useParams();
        const dispatch = useDispatch();
        const userId = useSelector(getUserId)
        const messageList = useSelector(getChatMessagesListById(chatId));
        const hasChat = useSelector(hasChatById(chatId));

        const onSendMessage = (text) => {
            const message = createMessage(userId, text)
            dispatch(addMessageWithThunk(message, chatId))
        };


        useEffect(() => {
            dispatch(onTrackingAddMessageWithThunk(chatId));
            dispatch(onTrackingRemoveMessageWithThunk(chatId));

            return () => {
                dispatch(offTrackingAddMessageWithThunk(chatId))
                dispatch(offTrackingRemoveMessageWithThunk(chatId))
            }
        }, [chatId])

        return <Component
        {...props}
        messageList={messageList}
        hasChat={hasChat}
        onSendMessage={onSendMessage}
        />
    }
}