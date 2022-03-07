import React from 'react';
import { Link } from 'react-router-dom'
import { ListItem, ListItemText } from '@material-ui/core';
import propTypes from "prop-types";




// перенесен в ChatList
export const Chat = ({ name, id }) => {
    return (
        <ListItem key={id} component={Link} to={`/chats/${id}`}>
          <ListItemText>{name}</ListItemText>
        </ListItem>
    );
};

Chat.propTypes = {
    id: propTypes.string,
    name: propTypes.string,
};