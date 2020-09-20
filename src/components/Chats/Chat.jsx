import React from 'react'
import styles from './Chat.module.css'
import Avatar from '@material-ui/core/Avatar'

const Chat = ({ name, message, timestamp, profilePic }) => {
    return (
        <div className={styles.chat}>
            <Avatar className={styles.chat__image} alt={name} src={profilePic}/>
            <div className={styles.chat__details}>
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className={styles.chat__timestamp}>{timestamp}</p>
        </div>
    )
}
export default Chat