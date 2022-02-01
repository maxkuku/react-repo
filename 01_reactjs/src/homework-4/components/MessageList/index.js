import React from 'react'
// eslint-disable-next-line
import ReactDOM from 'react-dom'
import propTypes from 'prop-types'
import { List } from '@material-ui/core';
import { Message } from '../Message'


export const MessageList = (props) => {
    
    return (
        <List>
            {props.messageList.map((item) => 
                <Message key={item.id}  {...item}  />
            )}
        </List>
    )

}

MessageList.propTypes = {
    messageList: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number,
            text: propTypes.string,
            author: propTypes.string
        })
    )
};

MessageList.defaultProps = {
    messageList: []
};