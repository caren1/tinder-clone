import React from 'react'
import styles from './Header.module.css'

import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'


const Header = () => {
    return (
        <div className={styles.header}>
            <IconButton>
                <PersonIcon fontSize="large" className={styles.header__icon}/>
            </IconButton>
            <img className={styles.header__logo}
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                alt="tinder-logo"/>
            <IconButton>
                <ForumIcon fontSize="large" className={styles.header__icon}/>
            </IconButton>
        </div>
    )
}

export default Header
