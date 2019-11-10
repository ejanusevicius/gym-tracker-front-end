//libs
import React from 'react';

//styling
import './loginForm.css';



function loginForm(props) {
    return(
        <form className="loginform">

            <i className="loginform__applogo ion-ios-pulse"></i>

            <input
            type="text"
            placeholder="Username"
            className="loginform__name"></input>

            <input
            type="password"
            placeholder="Password"
            className="loginform__password"></input>

            <input
            type="submit"
            value="Log in"
            className="loginform__submit"></input>

            <a className="loginform__anchor" href="#">Forgot password?</a>
            <a className="loginform__anchor" href="#">Create new account</a>

            <p 
            style={{marginLeft: '1.2rem', marginRight: '1.2rem'}}
            className="loginform__disclaimer">There is no back-end yet, however demo version is available below:</p>

            <a href="#"
            className="loginform__demobutton"
            onClick={props.changeAuth}>Demo</a>

            <p className="loginform__disclaimer">All data will be lost on reload!</p>

        </form>
    );
}

export default loginForm;