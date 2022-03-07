import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { ChatList } from '../../components/ChatList';
import { Messages } from '../Messages';
import { withChats } from "../../hocs/withChats"

// import { rootReducer } from '../../store'




const useStyles = makeStyles({
    wrapper: {
        display: "grid",
        gridTemplateColumns: "200px  1fr"
    }
});


export const ChatsRender = ({
  chats = withChats(),
  onCreateChat,
  onDeleteChat
}) => {


  const classes = useStyles();


  return (
    <div className={classes.wrapper}>
      <div>
        <ChatList onDelete={onDeleteChat} key={chats.id} list={chats} />
        <Button onClick={onCreateChat}>Create chat</Button>
      </div>
      <div>
        <Switch>
          <Route component={Messages} path="/chats/:chatId" />
        </Switch>
      </div>
    </div>
  );

};

export const Chats = withChats(ChatsRender)


