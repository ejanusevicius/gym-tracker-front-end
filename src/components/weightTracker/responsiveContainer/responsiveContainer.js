//libs
import React from 'react';
import { connect } from 'react-redux';

//styling
import './responsiveContainer.css';

//components
import WeightPlot from '../weightPlot/weightPlot';
import ExerciseData from '../exerciseData/exerciseData';
import SearchBar from '../searchBar/searchBar';

function responsiveContainer(props) {

    let content = null;
    
    if (props.activeResponsiveWidget === 'searchbar') {
        content = <SearchBar animation="animated fadeIn faster" />
    }

    if (props.activeResponsiveWidget === 'exercisedata') {    
        content = <ExerciseData animation="animated fadeIn faster" />
    }

    if (props.activeResponsiveWidget === 'weightplot') {
        content = <WeightPlot animation="animated fadeIn faster" />
    }

    return (
        <div className="responsivecontainer">

            <div className="responsivecontainer__buttonbox">
                <i className={`responsivecontainer__button ion-search`} 
                id="searchbar" 
                onClick={props.toggleActiveWidget}></i>

                <i className={`responsivecontainer__button ion-clipboard responsivecontainer__button--active`}
                id="exercisedata"
                onClick={props.toggleActiveWidget}></i>

                <i className={`responsivecontainer__button ion-connection-bars`}
                id="weightplot"
                onClick={props.toggleActiveWidget}></i>

            </div>

            <div className="responsivecontainer__contentbox">
                {content}
            </div>

        </div>
    );
}



const mapStateToProps = state => {
    return {
        activeResponsiveWidget: state.activeResponsiveWidget
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleActiveWidget: (event) => {
            resetAllClasses();
            event.target.classList.add('responsivecontainer__button--active');
            dispatch({type: 'CHANGE_RESPONSIVE_WIDGET', value: event.target.id})
        }
    }
}

function resetAllClasses() {
    const allWidgetIds = ['searchbar', 'exercisedata', 'weightplot'];
    allWidgetIds.forEach( el => {
        document.getElementById(el).classList.remove('responsivecontainer__button--active');
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(responsiveContainer);