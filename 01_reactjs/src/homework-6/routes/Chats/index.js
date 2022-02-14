import React, { useCallback, useEffect } from 'react'

import { Switch, Route} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { ChatList } from '../../components/ChatList';
import { getChatList } from '../../store/chats/selectors';
import { createChat, removeChat, setChats } from '../../store/chats/actions';
import { nanoid } from "nanoid";
import { Messages } from '../../components/Messages';
import { CHATS } from '../../mocks/chats';
import { removeMessageByChatId } from "../../store/messages/actions"



const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "200px  1fr"
    }
});


export const Chats = () => {
    const chats = useSelector(getChatList())
    const dispatch = useDispatch();
    const classes = useStyles();

    const onCreate = useCallback(() => {
      dispatch(createChat({
        id: nanoid(),
        name: 'chatName' + Date.now()
      }))
    }, []);


    const onDelete = (chatId) => {
      dispatch(removeChat(chatId))
      dispatch(removeMessageByChatId(chatId))
    }


    useEffect(() => {
      dispatch(setChats(CHATS))
    },[]);


    return (
        <div className={classes.wrapper}>
          <div>
            <ChatList onDelete={onDelete} list={chats} />
            <Button onclick={onCreate}>Create chat</Button>
          </div>
          <div>
            <Switch>
              <Route component={Messages} path="/chats/:chatId" />
            </Switch>
          </div>
        </div>
    );
}