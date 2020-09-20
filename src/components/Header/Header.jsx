import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styles from './Header.module.css'

import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'


const Header = ({ backButton }) => {
    const history = useHistory();

    return (
        <div className={styles.header}>
            { backButton ? (
                    <IconButton onCLick={() => history.replace(backButton)}>
                        <ArrowBackIosIcon fontSize="large" className={styles.header__icon}/>
                    </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize="large" className={styles.header__icon}/>
                </IconButton>
            )}

            <Link to="/">
                <img className={styles.header__logo}
                    src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
                    alt="tinder-logo"/>
            </Link>

            <Link to="/chat">
                <IconButton>
                    <ForumIcon fontSize="large" className={styles.header__icon}/>
                </IconButton>
            </Link>    
            
        </div>
    )
}

export default Header
