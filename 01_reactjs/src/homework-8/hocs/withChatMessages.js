import React from 'react'
import {USER_AUTHOR} from "../constatnts/authors"
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {hasChatById} from "../store/chats/selectors"
import {getChatMessageById} from "../store/messages/selectors"

import {sendMessageWithThunk} from "../store/messages/actions"
//import {USER_AUTHOR} from "../constatnts/authors"





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