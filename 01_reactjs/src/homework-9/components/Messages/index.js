import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams, Redirect } from 'react-router-dom';
import { MessageInput } from "../../components/MessageInput"
import { MessageList } from "../../components/MessageList"
import { getChatMessagesById } from "../../store/messages/selectors"
import { createMessage } from "../../store/messages/actions"
import { hasChatById } from "../../store/chats/selectors"




export const Messages = () => {
    const { chatId } = useParams();

    const dispatch = useDispatch();
    const messageList = useSelector(getChatMessagesById(chatId));
    const hasChat = useSelector(hasChatById(chatId));


    const sendMessage = (author, text) => {
        
        const newMessage = {
            author,
            text
        };
        dispatch(createMessage(newMessage, chatId));
        
    };



    const onSendMessage = (value) => {
        sendMessage('user', value);
    };


    useEffect(() => {
        if(!messageList || messageList.length === 0) {
            return;
        }

        const tail = messageList[messageList.length - 1];
        if (tail.author === 'bot') {
            return;
        }

        sendMessage('bot', 'hello');
    }, [messageList]);


    if(!hasChat) {
        return <Redirect to="/chats" />;
    }


    return (
        <>
          <MessageList messageList={messageList} />
          <MessageInput onSend={onSendMessage} />
        </>
    )

}