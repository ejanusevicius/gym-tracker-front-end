//libs
import React from 'react';

//styling
import './loadingSpinner.css';



function loadingSpinner() {
    return(
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    );
};

export default loadingSpinner;


