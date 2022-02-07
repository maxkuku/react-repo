import React from 'react';
import propTypes from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';
import styles from './Message.module.css';

export const Message = (props) => {

    return (
      <ListItem>
        <ListItemText>
            [{props.author}]: {props.text}
        </ListItemText>  
      </ListItem>
    );
};

Message.propTypes = {
    id: propTypes.string,
    text: propTypes.string,
    author: propTypes.string
}