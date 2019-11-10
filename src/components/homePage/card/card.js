//libs
import React from 'react';
import { Link } from 'react-router-dom';

//styling
import './card.css';



function Card(props) {
    return (
        <div className="card">

            <p className="card__number">{props.number}</p>
            <p className="card__title">{props.title}</p>
            <Link to={props.linkPath}>{props.linkText}</Link>
            
        </div>
    );
}

export default Card;