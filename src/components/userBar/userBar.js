//libs
import React from 'react';

//styling
import classes from './userBar.module.css';



function userBar(props) {
    
    return(
        <div className={classes.userBar}>

            <i className={`ion-ios-pulse-strong ${classes.appIcon}`}></i>

            <div className={classes.userBox}>

                <img src="/assets/photo.jpg" alt="user"></img>

                <a onClick={props.changeAuth} href="#">Log out</a>

            </div>
            
        </div>
    );

}

export default userBar;