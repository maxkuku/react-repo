import {useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {MessageList} from './components/MessageList'
import {MessageInput} from './components/MessageInput'
import {ChatList} from './components/ChatList'


const useStyles = makeStyles( {
    wrapper: {
        display: "grid",
        gridTemplateColumns: "200px 1fr"
    }
})


export const Homework = () => {
    const classes = useStyles();
    const [messageList, setMessageList] = useState([]);

    const sendMessage = (author,text) => {
        const newMessageList = [...messageList];
        const newMessage = {
            author,
            text,
            id: Date.now()
        };
        newMessageList.push(newMessage);
        setMessageList(newMessageList);
    };

    const onSendMessage = (value) => {
        sendMessage('user', value);
    };

    useEffect( () => {
        if (messageList.length === 0) {
            return;
        }

        const tail = messageList[messageList.length - 1];
        if (tail.author === 'bot') {
            return;
        }

        sendMessage('bot', ' Понял :)');
    }, [messageList]);




    return (
        <div className={classes.wrapper}>
            <ChatList
            lists={
                [
                {
                    name: "First chat",
                    id: 1,
                },
                {
                    name: "Second chat",
                    id: 2,
                },
                {
                    name: "Third chat",
                    id: 3,
                },
                {
                    name: "Fourth chat",
                    id: 4,
                },
            ]
        }
            />
            <div>
                <MessageList messageList={messageList} />
                <MessageInput onSend={onSendMessage} />
            </div>
        </div>
    )
}


