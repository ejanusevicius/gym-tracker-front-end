//libs
import React from 'react';

//styling
import classes from './header.module.css';



function header() {
    return(
        <header className={classes.weightHeader}>
            <h1>Gym weight tracker</h1>
        </header>
    );
}

export default header;