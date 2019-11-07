//libs
import React from 'react';

//styling
import classes from './loginPage.module.css';

//components
import LoginForm from '../../components/loginPage/loginForm/loginForm';



function loginPage(props) {
    return(
        <div className={classes.loginPageContainer}>

            <LoginForm changeAuth={props.changeAuth} />

        </div>
    );
};

export default loginPage;