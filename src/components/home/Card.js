import React from 'react';
import './Card.css'
import github from './assets/github.png'

const CustomCard = (props) => {
    const card = props.card
    console.log(card)
    return ( 
        <div className={card.class}>
            <div className="custom-card-content">
                <h2 className="custom-card-title">{card.title}</h2>
                <p className="custom-card-body">{card.description}</p>
                <div className="links">
                    <a target="blank_" href={card.link} className="custom-button " rel="noopener noreferrer">Learn More</a>
                    {
                        card.hasPDF ? <a target="blank_" href={card.pdfLink} className="github-a" rel="noopener noreferrer"><i class="far fa-file-pdf github-icon"></i></a> : null
                    }
                    <a target="blank_" href={card.githubLink} className="github-a" rel="noopener noreferrer"><i class="fab fa-github github-icon" href={card.link}></i></a>
                </div>
            </div>
        </div>
    )
}


export default CustomCard;
