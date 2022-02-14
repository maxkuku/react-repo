import React from 'react'
import { List } from '@material-ui/core'
import propTypes from 'prop-types'
import { Chat } from '../Chat'
// import { CHATS } from '../../mocks/chats'


// <Chat onclick={() => onDelete(item.id)} key={item.id} {...item} />

export const ChatList = ( list ) => {
    return (
        <List>
            {list.map((item) => (
                <Chat key={item.id} {...item} />
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