//libs
import React from 'react';

//styling
import './header.css';

//components
import BurgerButton from '../../burgerButton/burgerButton'; 



function header() {
    return(
        <header className="weightheader">
            <BurgerButton />
            <h1 className="weightheader__title">Gym weight tracker</h1>
        </header>
    );
}

export default header;