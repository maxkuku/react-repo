import React from 'react'
import propTypes from 'prop-types'
import { List } from '@material-ui/core';

import { Message } from '../Message'


export const MessageList = (props) => {
    
    return (
        <List>
            {props.messageList.map((item) => {
                <Message key={item.id} {...item} />
                // Ошибка Line 13:17:  Expected an assignment or function call and instead saw an expression  no-unused-expressions
            })}
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