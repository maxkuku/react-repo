import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addMessageWithThunk} from "../store/messages/actions"
import {getChatMessageListById} from "../store/messages/selectors"
import {hasChatById} from "../store/chats/selectors"
import {useParams} from "react-router-dom"
import {createMessage} from '../helpers'
import {getUserId} from "../store/users/selector"





export const withChatMessages = (Component) => {
    return (props) => {
        const {chatId} = useParams();
        const dispatch = useDispatch();
        const messageList = useSelector(getChatMessageById(chatId));
        const hasChat = useSelector(hasChatById(chatId));

        const onSendMessage = (text) => {
            dispatch(sendMessageWithThunk(USER_AUTHOR, text, chatId))
        };

        return <Component
        {...props}
        messageList={messageList}
        hasChat={hasChat}
        onSendMessage={onSendMessage}
        />
    }
}