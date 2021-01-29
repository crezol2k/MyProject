import React from 'react';
import './Navbar.css';

function CardItem(props) {
    return (
        <div>
            <span className="item-skill">
            <h5 className="skill-name">{props.skillName} </h5>
            </span>
            <p className="skill-description">
                {props.skillDescription}
            </p>
        </div>
    )
}

export default CardItem
