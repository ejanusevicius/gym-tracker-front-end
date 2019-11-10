//libs
import React from 'react';
import { connect } from 'react-redux'; 

//styling
import './backdrop.css';



function backdrop(props) {
    return(
        <div 
        onClick={props.turnOffAddDataModal} 
        className="backdrop"></div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        turnOffAddDataModal: () => dispatch({type: 'TURN_OFF_DATA_MODAL'})
    }
};

export default connect(null, mapDispatchToProps)(backdrop);