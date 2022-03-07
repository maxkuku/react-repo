import React from 'react';
import propTypes from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';



const useStyles = makeStyles( {
  message: {
      padding: "5px 16px",
      borderRadius: "8px"
  }
})


export const Message = (props) => {

  const classes = useStyles();

    return (
      <ListItem className={classes.message}>
        <ListItemText >
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