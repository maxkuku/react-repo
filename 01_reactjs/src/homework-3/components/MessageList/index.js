import React from 'react'
import { List } from '@material-ui/core';
import { Message } from '../Message'


export const MessageList = (props) => (
    
        
        <List>
            {props.messageList.map((item) => {
                return(
                <Message key={item.id} {...item}/>
                )
            })}
        </List>
    

)

