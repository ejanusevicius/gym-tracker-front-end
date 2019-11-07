//libs
import React from 'react';
import { Link } from 'react-router-dom';

//styling
import classes from './card.module.css';



function Card(props) {
    return (
        <div className={classes.Card}>

            <p className={classes.CardNumber}>{props.number}</p>
            <p className={classes.CardTitle}>{props.title}</p>
            <Link to={props.linkPath}>{props.linkText}</Link>
            
        </div>
    );
}

export default Card;