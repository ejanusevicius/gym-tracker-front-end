//libs
import React from 'react';

//styling
import './weightTracker.css';

//components
import Header from '../../components/weightTracker/header/header';
import Plot from '../../components/weightTracker/weightPlot/weightPlot';
import SearchBar from '../../components/weightTracker/searchBar/searchBar';
import ExerciseData from '../../components/weightTracker/exerciseData/exerciseData';



function weightTracker() {

    return (
        <div className="weighttracker">

            <Header />

            <div className="weighttracker__dashboard">

                <SearchBar />
                <div className="weighttracker__displaybox">
                    <ExerciseData />
                    <Plot />
                </div>

            </div>
            
        </div>
    );
}

export default weightTracker;