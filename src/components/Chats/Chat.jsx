import React from 'react'
import styles from './Chat.module.css'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'

const Chat = ({ name, message, timestamp, profilePic }) => {
    return (
        <Link to={`/chat/${name}`}>
            <div className={styles.chat}>
                <Avatar className={styles.chat__image} alt={name} src={profilePic}/>
                <div className={styles.chat__details}>
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className={styles.chat__timestamp}>{timestamp}</p>
            </div>
        </Link>
    )
}
export default Chat