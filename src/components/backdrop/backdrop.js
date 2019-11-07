//libs
import React from 'react';
import { connect } from 'react-redux'; 

//styling
import classes from './backdrop.module.css';



function backdrop(props) {
    return(
        <div onClick={props.turnOffAddDataModal} className={classes.backdrop}></div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        turnOffAddDataModal: () => dispatch({type: 'TURN_OFF_DATA_MODAL'})
    }
};

export default connect(null, mapDispatchToProps)(backdrop);