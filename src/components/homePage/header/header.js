//libs
import React from 'react';

//styling
import classes from './header.module.css';



function header() {
    return(
        <header className={classes.homeHeader}>
            <h1>Dashboard</h1>
        </header>
    );
}

export default header;