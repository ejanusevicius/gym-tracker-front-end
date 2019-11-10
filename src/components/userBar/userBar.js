//libs
import React from 'react';

//styling
import './userBar.css';



function userBar(props) {
    
    return(
        <div className="userbar">

            <i className="userbar__icon ion-ios-pulse-strong"></i>

            <div className="userbox">

                <img
                src="/assets/photo.jpg"
                alt="user"
                className="userbox__image"></img>

                <a
                onClick={props.changeAuth}
                href="#"
                className="userbox__anchor">Log out</a>

            </div>
            
        </div>
    );

}

export default userBar;