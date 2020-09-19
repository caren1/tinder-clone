import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import styles from './TinderCards.module.css'


const TinderCards = () => {

    const [ people, setPeople ] = useState([
        {
            name: 'Elon Musk',
            url: 'https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg',
        },
        {
            name: 'Jeff Bezoz',
            url: 'https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg',
        },
    ])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    }
 
    return (
        <div className={styles.tinderCards}>
            <div className={styles.tinderCards__cardContainer}>
            {people.map((person) => (
                <TinderCard 
                className={styles.swipe}
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}>
                    <div className={styles.card} style={{ backgroundImage: "url(" + person.url + ")"}}>
                    <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
