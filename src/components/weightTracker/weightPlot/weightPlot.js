//libs
import React from 'react';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';

//styling
import './weightPlot.css';

//functions
import formatString from '../../../functions/formatString';



function WeightPlot(props) {
  
  //variables
  let exerciseName = null;
  let extractedDates = null;
  let extractedWeights = null;

  //empty object.
  let newData = {};

  //check if data exists then assign chosen exercise to the newData
  if (props.plotData) {
    //new data assignment
    const fullPlotData = props.plotData;

    //find index of the data
    const plotDataIndex = fullPlotData.findIndex( el => el.name === props.activeExercise);


    //if data was not found choose last entry
    if (plotDataIndex === -1) {

      //last entry
      newData = {...props.plotData[props.plotData.length - 1]};

      //sort based on date
      newData.data.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      });
    } else {

      //choose based on index
      newData = {...props.plotData[plotDataIndex]};

      //sort based on date
      newData.data.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      });
    }

    //extract name for the plot
    exerciseName = newData.name;

    //extract data for the plot
    extractedDates = newData.data.map( el => el.date );  
    extractedWeights = newData.data.map( el => el.weight );
  }


  //format the name for display
  let displayName = 'None';
  if (exerciseName) {
    displayName = formatString(exerciseName);
  }

    return (
        <Plot
        className="weightplot"
        data={[
          {
            x: extractedDates,
            y: extractedWeights,
            type: 'scatter',
            mode: 'lines+points',
            marker: {color: '#57d6ff'},
          },
        ]}
        layout={ {autosize: true, title: displayName, margin: {
              l: 50,
              r: 50,
              b: 70,
              t: 70
            }
          }
        }
        useResizeHandler={true}
      />
      

      
    );
}

const mapStateToProps = state => {
  return {
    activeExercise: state.activeExercise,
    plotData: state.exerciseData
  }
}

export default connect(mapStateToProps, null)(WeightPlot);