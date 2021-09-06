import React from 'react';
import './Card.css'

const CustomCard = (props) => {
    const card = props.card
    console.log(card)
    return ( 
        <div className={card.class}>
            <div className="custom-card-content">
                <h2 className="custom-card-title">{card.title}</h2>
                <p className="custom-card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae finibus velit</p>
                <a href="#" className="custom-button">Learn More</a>
            </div>
        </div>
    )
}


export default CustomCard;
