//libs
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

//styling
import classes from './addExerciseDataModal.module.css';
import './redOutline.css';

//functions
import formatString from '../../functions/formatString';



function AddExerciseModal(props) {

    const [exerciseName, setExerciseName] = useState('');
    const [exerciseDate, setExerciseDate] = useState('');
    const [exerciseWeight, setExerciseWeight] = useState('');

    const getName = (name) => {
        setExerciseName(name);
        console.log(name);
    }

    const getDate = (date) => {
        setExerciseDate(date);
    }

    const getWeight = (event) => {

        //set up regex filter
        const re = /^\d*\.?\d*$/;

        // if value is not blank, then test the regex
        if (event.target.value === '' || re.test(event.target.value)) {
            //set state
           setExerciseWeight(event.target.value);
        } else {
            //do nothing
        }
    }

    useEffect( () => {
        setExerciseName(props.exerciseName);
    }, [props.exerciseName])

    return(
        
        <div className={classes.Modal}>

            <header className={classes.Modal__Header}>

                <h4>Add data</h4>

            </header>

            <section className={classes.Modal__Body}>

                <form 
                onSubmit={ event => props.addExerciseData(event, exerciseName, exerciseDate, exerciseWeight)}>

                    <label>Current exercise</label>

                    <input type="text" 
                    className="js--name--box"
                    onChange={ event => getName(event.target.value) }
                    value={formatString(props.exerciseName)}></input>

   
                    <label>Date</label>
                    <input type="date"
                    className="js--date--box" 
                    onChange={ event => getDate(event.target.value) }
                    ></input>

                    <label>Weight used (Kg)</label>

                    <input type="text"
                    className="js--weight--box"
                    onChange={ event => getWeight(event) } 
                    value={exerciseWeight}></input>

                    <input type="submit" value="Submit"></input>

                </form>
               
            </section>

        </div>
    );

}

const mapDispatchToProps = dispatch => {
    return {
        addExerciseData: (event, exerciseName, exerciseDate, exerciseWeight) => {

            if (exerciseName < 1 && (exerciseDate === '' || exerciseDate === '//') && exerciseWeight === '' ) {
                event.preventDefault();
                //add red ouline to all
                document.querySelector('.js--name--box').classList.add("redOutline");
                document.querySelector('.js--date--box').classList.add("redOutline");
                document.querySelector('.js--weight--box').classList.add("redOutline");
                console.log(`error here`);
            } else if (exerciseName < 1 && (exerciseDate === '' || exerciseDate === '//')) {
                event.preventDefault();
                //add red ouline to name & date
                document.querySelector('.js--name--box').classList.add("redOutline");
                document.querySelector('.js--date--box').classList.add("redOutline");
                //remove the outline from correct input
                document.querySelector('.js--weight--box').classList.remove("redOutline");
                console.log(`error here`);
            } else if (exerciseName < 1 && exerciseWeight === '') {
                event.preventDefault();
                //add red ouline to name & weight
                document.querySelector('.js--name--box').classList.add("redOutline");
                document.querySelector('.js--weight--box').classList.add("redOutline");
                //remove the outline from correct input
                document.querySelector('.js--date--box').classList.remove("redOutline");
                console.log(`error here`);
            } else if (exerciseWeight === '' && (exerciseDate === '' || exerciseDate === '//')) {
                event.preventDefault();
                //add red ouline to date & weight
                document.querySelector('.js--date--box').classList.add("redOutline");
                document.querySelector('.js--weight--box').classList.add("redOutline");
                //remove the outline from correct input
                document.querySelector('.js--name--box').classList.remove("redOutline");
                console.log(`error here`);
            } else if (exerciseName < 1) {
                // add red outline to name field
                event.preventDefault();
                console.log(`nonononono`);
                document.querySelector('.js--name--box').classList.add("redOutline");
                //remove the outline from correct inputs
                document.querySelector('.js--date--box').classList.remove("redOutline");
                document.querySelector('.js--weight--box').classList.remove("redOutline");
                console.log(`error here`);
            } else if (exerciseDate === '' || exerciseDate === '//') {
                // add red outline to date field
                event.preventDefault();
                // do something
                document.querySelector('.js--date--box').classList.add("redOutline");
                //remove
                document.querySelector('.js--name--box').classList.remove("redOutline");
                document.querySelector('.js--weight--box').classList.remove("redOutline");
                console.log(`error here`);
            } else if (exerciseWeight === '') {
                //add red outline to weight field
                event.preventDefault();
                document.querySelector('.js--weight--box').classList.add("redOutline");
                // do something
                document.querySelector('.js--name--box').classList.remove("redOutline");
                document.querySelector('.js--date--box').classList.remove("redOutline");
                console.log(`error here`);
            } else {
                console.log(`there is an error`);
                //prevent reload
                event.preventDefault();
                //dispatch
                dispatch({type: 'ADD_DATA_ENTRY', payload: {
                    name: exerciseName,
                    date: exerciseDate,
                    weight: exerciseWeight
                }});
                document.querySelector('.js--name--box').classList.remove("redOutline");
                document.querySelector('.js--date--box').classList.remove("redOutline");
                document.querySelector('.js--weight--box').classList.remove("redOutline");
                //remove outline
            }
        } 
    }
};

const mapStateToProps = state => {
    return {
        exerciseName: state.activeExercise
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddExerciseModal);