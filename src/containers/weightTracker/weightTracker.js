//libs
import React from 'react';

//styling
import classes from './weightTracker.module.css';

//components
import Header from '../../components/weightTracker/header/header';
import Plot from '../../components/weightTracker/weightPlot/weightPlot';
import SearchBar from '../../components/weightTracker/searchBar/searchBar';
import ExerciseData from '../../components/weightTracker/exerciseData/exerciseData';



function weightTracker() {

    return (
        <div className={classes.weightTrackerWindow}>

            <Header />

            <div className={classes.dashboard}>

                <SearchBar />
                <div className={classes.displayBox}>
                    <ExerciseData />
                    <Plot />
                </div>

            </div>
            
        </div>
    );
}

export default weightTracker;