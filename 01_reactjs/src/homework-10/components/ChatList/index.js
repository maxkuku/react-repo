import React from 'react'
import { List, ListItem, Link, ListItemText } from '@mui/material'
import propTypes from 'prop-types'
// import { Chat } from '../Chat'
// import { CHATS } from '../../mocks/chats'
// export const list = CHATS

export const Chat = ({ name, id }) => {
    return (
        <ListItem key={id} component={Link} to={`/chats/${id}`}>
          <ListItemText>{name}</ListItemText>
        </ListItem>
    );
};



export const ChatList = ( Chat, onDelete ) => {
    return (
        <List>
            {Chat.map((item) => (

                <Chat onClick={() => onDelete(item.id)} key={item.id} {...item}>{item.name}</Chat>
            ))}    
        </List>
    )
}


ChatList.propTypes = {
    list: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            name: propTypes.string
        })
    )
};