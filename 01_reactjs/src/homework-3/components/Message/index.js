import React from 'react';
import styles from './Message.module.css';

export const Message = (props) => {

    return (
    <p className={[
        'message',
        props.author === 'bot' ? 'bot' : '',
        props.weight === 'bold' ? styles.bold: '',
        props.style === 'em' ? styles.em: '',
        props.align === 'right' ? styles.right: '',
    ].join(' ')}>{props.text}
        {/** {props.children ? props.children : "undef"} */}
    </p>
    )
}