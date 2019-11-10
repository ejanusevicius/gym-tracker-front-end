//libs
import React from 'react';

//styling
import './loginPage.css';

//components
import LoginForm from '../../components/loginPage/loginForm/loginForm';



function loginPage(props) {
    return(
        <div className="loginpage">

            <LoginForm changeAuth={props.changeAuth} />

        </div>
    );
};

export default loginPage;