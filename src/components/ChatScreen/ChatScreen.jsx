import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import styles from './ChatScreen.module.css'

const ChatScreen = () => {

    const [ messages, setMessages ] = useState([
        {
            name: 'Ellen',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ybWYwp5tIyZXc_Q4_91HRjj1iPO-e7L-BA&usqp=CAU',
            message: 'Whats up'
        },
        {
            name: 'Ellen',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ybWYwp5tIyZXc_Q4_91HRjj1iPO-e7L-BA&usqp=CAU',
            message: 'Hows it going'
        },
        {
            message: 'Hi! everything fine'
        },
    ])

    return (
        <div className={styles.chatScreen}>
            <p className={styles.chatScreen__timestamp}>You matched with ellen on 10/08/20</p>
            {messages.map((message) => (
                message.name ? (
                    <div className={styles.chatScreen__message}>
                    <Avatar className={styles.chatScreen__image}
                    alt={message.name}
                    src={message.image}
                    />
                    <p className={styles.chatScreen__text}>
                        {message.message}
                    </p>
                    </div>
                ) : (
                    <div className={styles.chatScreen__message}>
                    <p className={styles.chatScreen__textUser}>
                        {message.message}
                    </p>
                    </div>
                ) 
            ))}
        </div>
    )
}

export default ChatScreen;