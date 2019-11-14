//libs
import React from 'react';
import { connect } from 'react-redux'; 

//styling
import './backdrop.css';



function backdrop(props) {

    let onClickFunction = null;

    if (props.onClickFunc === 'addExercise') {
        onClickFunction = props.turnOffAddDataModal;
    }
    if (props.onClickFunc === 'responsiveNavbar') {
        onClickFunction = props.toggleResponsiveNavBar
    }

    return(
        <div 
        onClick={onClickFunction} 
        className={`backdrop ${props.animation}`}></div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        turnOffAddDataModal: () => dispatch({type: 'TURN_OFF_DATA_MODAL'}),
        toggleResponsiveNavBar: () => dispatch({type: 'TOGGLE_RESPONSIVE_NAVBAR'})
    }
};

export default connect(null, mapDispatchToProps)(backdrop);