import React from 'react'

import { Switch, Route} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ChatList } from '../components/ChatList';
import { Messages } from '../components/Messages';
import { CHATS } from '../mocks/chats';



const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "200px  1fr"
    }
});

export const Chats = () => {
    const classes = useStyles();


    return (
        <div className={classes.wrapper}>
          <ChatList list={CHATS} />
          <div>
            <Switch>
              <Route component={Messages} path="/chats/:chatId" />
            </Switch>
          </div>
        </div>
    )
}