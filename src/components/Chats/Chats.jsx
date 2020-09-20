import React from 'react'
import Chat from './Chat'
import styles from './Chats.module.css'

const Chats = () => {
    return (
        <div className="chats">
            <Chat name="Sarah" message="Yo what's up!" timestamp="35 min ago" profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ybWYwp5tIyZXc_Q4_91HRjj1iPO-e7L-BA&usqp=CAU"/>
            <Chat name="Monica" message="Are you there?" timestamp="1 hour ago" profilePic="https://i.guim.co.uk/img/media/0ccb2ab8101509c1f227f8848a46ea96bd03e850/0_861_2832_2815/master/2832.jpg?width=700&quality=85&auto=format&fit=max&s=5a1bc666a99eab150fcf37b093f3fbbc"/>
            <Chat name="Joanna" message="Waiting for you already!" timestamp="20 sec ago" profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCwsneR6mSUCYeCsCaVCHGFNacT6lWhWDc4w&usqp=CAU"/>
        </div>
    )
}

export default Chats;