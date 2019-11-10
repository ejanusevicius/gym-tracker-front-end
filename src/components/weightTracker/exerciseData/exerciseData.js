//libs
import React from 'react';
import { connect } from 'react-redux';

//styling
import './exerciseData.css';

//functions
import formatString from '../../../functions/formatString';
import formatDate from '../../../functions/formatDate';



function ExerciseData(props) {


    let tableEntries = null;

    let prevButton = <button className={`exercisedata__pagebutton exercisedata__pagebutton--disabled`}>Prev</button>;
    let nextButton = <button className={`exercisedata__pagebutton exercisedata__pagebutton--disabled`}>Next</button>;

    let addDataButton = <a href="#" className="exercisedata__databutton--disabled">Add data</a>;

    if (props.activeExercise !== null) {
        addDataButton = <a href="#" style={{textDecoration: "none"}} onClick={props.turnOnAddDataModal}>Add data</a>;
    }


    let newData = {name: '...'};


    if (props.exerciseData) {

        //new data assignment
        const fullExerciseData = props.exerciseData;

        //find index of the data
        const exerciseDataIndex = fullExerciseData.findIndex( el => el.name === props.activeExercise);


        // if no data is found
        if (exerciseDataIndex === -1) {
            //create new exercise
            const newExerciseObj = {
                name: props.activeExercise,
                data: []
            }

            //push it to the state
            props.createNewExerciseData(newExerciseObj);

            //set the new array entry to be the one from which the data is read
            newData = {...props.exerciseData[props.exerciseData.length - 1]}

            //sorting based on date
            newData.data.sort(function(a,b){
                return new Date(a.date) - new Date(b.date);
              });

        } else {

            //create newData based on the exercise chosen
            newData = {...props.exerciseData[exerciseDataIndex]}
            
            //sorting based on date
            newData.data.sort(function(a,b){
                return new Date(a.date) - new Date(b.date);
              });
        }


        //pagination
        const resultsPerPage = 5;
        const pageNum = Math.ceil(newData.data.length / resultsPerPage);
        const start = (props.pageNumber - 1) * resultsPerPage;
        const end = props.pageNumber * resultsPerPage;


        //render different buttons based on cases
        if (props.pageNumber === 1 & newData.data.length > 5) {
            //go to next page only            
            nextButton = <button className="exercisedata__pagebutton" onClick={props.goToNextPage}>Next</button>;

        } else if (props.pageNumber > 1 && props.pageNumber < pageNum) {
            //show both buttons
            prevButton = <button className="exercisedata__pagebutton" onClick={props.goToPreviousPage}>Prev</button>;
            nextButton = <button className="exercisedata__pagebutton" onClick={props.goToNextPage}>Next</button>;

        } else if (props.pageNumber === pageNum && newData.data.length < 5) {
            //disable both buttons


        } else if ((props.pageNumber === pageNum && newData.data.length > 5) || (props.pageNumber > 1 && newData.data.slice(start, end).length === 0)) {
            //show only prev page only
            prevButton = <button className="exercisedata__pagebutton" onClick={props.goToPreviousPage}>Prev</button>;

        } else if (props.pageNumber === pageNum && newData.data.slice(start, end).length < 5) {
            //show only prev page only
            prevButton = <button className="exercisedata__pagebutton" onClick={props.goToPreviousPage}>Prev</button>;

        } else {
            //do nothing (both buttons are disabled)
        }

        //pagination (slicing based on page number)
        tableEntries = newData.data.slice(start, end).map( el => {
            return(
                <tr key={el.id}>
                    <th>{formatDate(el.date)}</th>
                    <th>{`${el.weight} Kg`}</th>
                    <th><button 
                    id={el.id} name={props.activeExercise}
                    className="exercisedata__removebutton" 
                    onClick={ props.deleteExerciseData }>&#215;</button></th>
                </tr>
            );
        });
    }

    //formatting the name of exercise for display
    let exerciseName = 'none';

    if (newData.name) {
        exerciseName = formatString(newData.name);
    }

    return(
        <div className="exercisedata">


            <h3 className="exercisedata__title">{exerciseName}</h3>

            <table className="exercisedata__table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Weight</th>
                        <th><span>&nbsp;</span></th>
                    </tr>
                </thead>
                <tbody>
                    {tableEntries}
                </tbody>
            </table>




            <div className="exercisedata__buttonbox">

                    {prevButton}
                    {addDataButton}
                    {nextButton}

                </div>

        </div>
    );
}

const mapStateToProps = state => {
    return {
      exerciseData: state.exerciseData,
      pageNumber: state.dataPageNumber,
      activeExercise: state.activeExercise
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        turnOnAddDataModal: () => dispatch({type: 'TURN_ON_DATA_MODAL'}),
        deleteExerciseData: (event) => {
            console.log(event.target.id);
            dispatch({type: 'DELETE_DATA_ENTRY', payload: {name: event.target.name, id: event.target.id}});
        },
        goToNextPage: () => dispatch({type: 'GO_TO_NEXT_PAGE'}),
        goToPreviousPage: () => dispatch({type: 'GO_TO_PREVIOUS_PAGE'}),
        createNewExerciseData: (inputObj) => dispatch({type: 'CREATE_NEW_EXERCISE_DATA', value: inputObj})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseData);