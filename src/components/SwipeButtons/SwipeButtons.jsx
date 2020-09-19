import React from 'react'
import styles from './SwipeButtons.module.css'

import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'


const SwipeButtons = () => {
    return (
        <div className={styles.swipeButtons}>
            <IconButton className={styles.swipeButtons__repeat}>
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className={styles.swipeButtons__left}>
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className={styles.swipeButtons__star}>
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className={styles.swipeButtons__right}>
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className={styles.swipeButtons__lightning}>
                <FlashIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons