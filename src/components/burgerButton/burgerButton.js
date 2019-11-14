import React from 'react';
import { connect } from 'react-redux';

//styling
import './burgerButton.css';

function burgerButton(props) {
    return (
        <div className="burgerbutton" onClick={props.toggleResponsiveNavBar}>
            <i className="burgerbutton__icon ion-navicon-round"></i>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleResponsiveNavBar: () => dispatch({type: 'TOGGLE_RESPONSIVE_NAVBAR'})
    }
}

export default connect(null, mapDispatchToProps)(burgerButton);