import React from 'react'
import "./card.css";
const Card = (props) => {
    return (
        <div className='card'>
            <h4>
                {props.title} of the card.
            </h4>
            <p>Description of the card.</p>
        </div>
    )
}

export default Card