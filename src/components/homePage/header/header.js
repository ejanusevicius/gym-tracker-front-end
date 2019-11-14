//libs
import React from 'react';

//styling
import './header.css';

//components
import BurgerButton from '../../burgerButton/burgerButton';




function header() {
    return(
        <header className="homeheader">
            <BurgerButton />
            <h1 className="homeheader__title">Dashboard</h1>
        </header>
    );
}

export default header;