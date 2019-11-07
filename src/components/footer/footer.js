//libs
import React from 'react';

//styling
import classes from './footer.module.css';



function footer() {

    return(
        <footer className={classes.mainFooter}>
            <p>This application is built with React by Edvinas Janusevicius, 2019.</p>
        </footer>
    );
}

export default footer;