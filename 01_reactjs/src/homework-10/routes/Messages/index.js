import React from 'react'

import { Redirect } from 'react-router-dom';
import { MessageInput } from "../../components/MessageInput"
import { MessageList } from "../../components/MessageList"
import { withChatMessages } from "../../hocs/withChatMessages"





export const MessagesRender = ({
    messageList,
    hasChat,
    onSendMessage,
}) => {
    

    if(!hasChat){
        return <Redirect to="/chats" />;
    }

    // const sendMessage = (author, text) => {
        
    //     const newMessage = {
    //         author,
    //         text
    //     };
    //     dispatch(createMessage(newMessage, chatId));
        
    // };



    // const onSendMessage = (value) => {
    //     sendMessage('user', value);
    // };


    // useEffect(() => {
    //     if(!messageList || messageList.length === 0) {
    //         return;
    //     }

    //     const tail = messageList[messageList.length - 1];
    //     if (tail.author === 'bot') {
    //         return;
    //     }

    //     sendMessage('bot', 'hello');
    // }, [messageList]);


    


    return (
        <>
          <MessageList messageList={messageList} />
          <MessageInput onSend={onSendMessage} />
        </>
    )

}



export const Messages = withChatMessages(MessagesRender);