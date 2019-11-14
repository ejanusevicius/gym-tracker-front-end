//libs
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

//styling
import './responsiveNavBar.css';

//animations
import '../../vendors/css/animate.css';



function responsiveNavBar(props) {

    const logOut = () => {
        props.changeAuth();
    }

    const toggleNavBar = () => {
        props.toggleResponsiveNavBar();
    }

    return(
        <nav className="animated fadeInLeft faster responsiveNavbar">

                <i
                className="responsiveNavbar__closebutton ion-close-round"
                onClick={props.toggleResponsiveNavBar}></i>

            <ul>

                <li><NavLink 
                to="/app/dashboard"
                activeStyle={{backgroundColor: "#57d6ff"}}
                onClick={toggleNavBar}>Dashboard</NavLink></li>
                
                <li><NavLink 
                to="/app/weight-tracker" 
                activeStyle={{backgroundColor: "#57d6ff"}}
                onClick={toggleNavBar}>Weight tracker</NavLink></li>

            </ul>

            <div className="responsiveUserbox">

                <img
                src="/assets/photo.jpg"
                alt="user"
                className="responsiveUserbox__image"></img>

                <a
                onClick={logOut}
                href="#"
                className="responsiveUserbox__anchor">Log out</a>

            </div>

        </nav>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        toggleResponsiveNavBar: () => dispatch({type: 'TOGGLE_RESPONSIVE_NAVBAR'})
    }
}

export default connect(null, mapDispatchToProps)(responsiveNavBar);