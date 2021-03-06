
import React from 'react';
import { Redirect } from "react-router-dom";
import{ MessageInput } from "../../components/MessageInput";
import{ MessageList } from "../../components/MessageList";


import {Redirect} from "react-router-dom";
import React from 'react'
import{MessageInput} from "../../components/MessageInput";
import{MessageList} from "../../components/MessageList";


import { withChatMessages } from "../../hocs/withChatMessages";


export const MessagesRender = ({
    messageList,
    hasChat,
    onSendMessage
}) => {
    if(!hasChat) {
        return <Redirect to="/chats"/>;
    }

    return (
        <>
            <MessageList messageList={messageList}/>
            <MessageInput onSend={onSendMessage}/>
        </>
    )
}

export const Messages = withChatMessages(MessagesRender);