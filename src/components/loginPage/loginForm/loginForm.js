//libs
import React from 'react';

//styling
import classes from './loginForm.module.css';



function loginForm(props) {
    return(
        <form className={classes.loginForm}>

            <i className="ion-ios-pulse"></i>

            <input
            type="text" placeholder="Username"></input>

            <input
            type="password" placeholder="Password"></input>

            <input
            type="submit" value="Log in"></input>

            <a href="#">Forgot password?</a>
            <a href="#">Create new account</a>

            <p style={{marginLeft: '1.2rem', marginRight: '1.2rem'}}>There is no back-end yet, however demo version is available below:</p>
            <a href="#"
            className={classes.loginButton}
            onClick={props.changeAuth}>Demo</a>

            <p>All data will be lost on reload!</p>

        </form>
    );
}

export default loginForm;