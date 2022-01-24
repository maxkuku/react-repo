import React from 'react';
import styles from './Message.module.css';

export const Message = (props) => {

    return (
    <p className={[
        props.weight === 'bold' ? styles.bold: '',
    ].join(' ')}>
        {props.children ? props.children : "undef"}
    </p>
    )
}