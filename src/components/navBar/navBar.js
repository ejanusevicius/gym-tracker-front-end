//libs
import React from 'react';
import { NavLink } from 'react-router-dom';

//styling
import './navBar.css';



function navBar() {
    return(
        <nav className="navbar">

            <ul>

                <li><NavLink 
                to="/app/dashboard"
                activeStyle={{backgroundColor: "#57d6ff"}}>Dashboard</NavLink></li>
                
                <li><NavLink 
                to="/app/weight-tracker" 
                activeStyle={{backgroundColor: "#57d6ff"}}>Weight tracker</NavLink></li>

            </ul>

        </nav>
    );
}

export default navBar;