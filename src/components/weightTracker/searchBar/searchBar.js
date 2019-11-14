//libs
import React, { useState } from 'react';
import { connect } from 'react-redux';

//styling
import './searchBar.css';

//functions
import generateId from '../../../functions/randomId';
import formatString from '../../../functions/formatString';

import exerciseList from '../../../api_dummies/apiDummy';

function SearchBar(props) {

    const [searchInput, setInput] = useState('');

    const [filteredExercises, setFilteredExercises] = useState('');
    
    //filter
    const filterSearch = (event) => {

        //set regex expresison for filter
        const re = /^[a-zA-Z][a-zA-Z\s]*$/;

        // if value is not blank, then test the regex
        if (event.target.value === '' || re.test(event.target.value)) {
            //set the state
            setInput(event.target.value);

            //call the filter
            filterExercises(event);

        } else {
            //do nothing
        }
    }
    
    const filterExercises = (event) => {

        //get input
        setInput(event.target.value);
    
        //filter the exercises
        let filteredList = null;

        if (event.target.value.length > 0) {
            filteredList = exerciseList.filter( el => {
                if (el.includes(event.target.value) || el.includes(event.target.value.toLowerCase())) {
                    return el;
                }
            }); 
        }

        //reset page number after each keystroke
        props.resetSearchPageNumber();

        //set the state to filteredList
        setFilteredExercises(filteredList);
    };

    const createNewExercise = (event) => {
        //dispatch the action
        props.addNewExercise(searchInput);

        //clearing search query after submission
        document.querySelector(".js--searchBox").value = '';
        document.querySelector(".js--searchBox").placeholder = 'Added!';
    }

    //rendering
    let renderedList = null;

    //buttons
    let prevButton = <button className={`searchbar__pagebutton searchbar__pagebutton--disabled`}>Prev</button>;
    let nextButton = <button className={`searchbar__pagebutton searchbar__pagebutton--disabled`}>Next</button>;


    //pagination
    const resultsPerPage = 5;
    let pageNum = 1;
    const start = (props.pageNumber - 1) * resultsPerPage;
    const end = props.pageNumber * resultsPerPage;




    //cases for button rendering
    if (filteredExercises) {

        if (filteredExercises.length > 0) {
            pageNum = Math.ceil(filteredExercises.length / resultsPerPage);
        } else {
            pageNum = 1;
        }

        //setting the placeholder
        document.querySelector(".js--searchBox").placeholder = 'Enter exercise name';

        if (props.pageNumber === 1 & filteredExercises.length > 5) {
            //go to next page only            
            prevButton = <button className={`searchbar__pagebutton searchbar__pagebutton--disabled`}>Prev</button>;
            nextButton = <button className="searchbar__pagebutton" onClick={props.searchGoToNextPage}>Next</button>;

        } else if (props.pageNumber > 1 && props.pageNumber < pageNum) {
            //show both buttons
            prevButton = <button className="searchbar__pagebutton" onClick={props.searchGoToPreviousPage}>Prev</button>;
            nextButton = <button className="searchbar__pagebutton" onClick={props.searchGoToNextPage}>Next</button>;

        } else if (props.pageNumber === pageNum && filteredExercises.length < 5) {
            //disable both buttons
            prevButton = <button className={`searchbar__pagebutton searchbar__pagebutton--disabled`}>Prev</button>;
            nextButton = <button className={`searchbar__pagebutton searchbar__pagebutton--disabled`}>Next</button>;

        } else if (props.pageNumber === pageNum && filteredExercises.length > 5) {
            //show only prev page only
            prevButton = <button className="searchbar__pagebutton" onClick={props.searchGoToPreviousPage}>Prev</button>;
            nextButton = <button className={`searchbar__pagebutton searchbar__pagebutton--disabled`}>Next</button>;

        }

        //slicing based on page number
        renderedList = filteredExercises.slice(start, end).map( el => {
            return (
                <p
                key={generateId().toString()} 
                id={el}
                onClick={props.setActiveExercise}>{formatString(el)} </p>
            )
        });
    };

    return(
        <div className={`searchbar ${props.animation}`}>

            <h2 className="searchbar__title">Search for an exercise</h2>

                <div className="searchbar__box">

                    <input
                    value={searchInput}
                    className="searchbar__input js--searchBox"
                    type="text"
                    placeholder="Enter exercise name"
                    onChange={filterSearch}></input>

                    <button
                    onClick={createNewExercise}
                    className="searchbar__addbutton">+</button>
            
                </div>

                <div className="searchbar__resultbox">
                    {renderedList}
                </div>

                <div className="searchbar__buttonbox">
                    {prevButton}
                    {nextButton}
                </div>

        </div>
    );
};


const mapStateToProps = state => {
    return {
        pageNumber: state.searchPageNumber
    }
};

const mapDispatchToProps = dispatch => {
    return {
        searchGoToNextPage: () => dispatch({type: 'SEARCH_GO_TO_NEXT_PAGE'}),
        searchGoToPreviousPage: () => dispatch({type: 'SEARCH_GO_TO_PREVIOUS_PAGE'}),
        resetSearchPageNumber: () => dispatch({type: 'RESET_SEARCH_PAGE_NUMBER'}),
        setActiveExercise: (event) => dispatch({type: 'SET_ACTIVE_EXERCISE', value: event.target.id}),
        addNewExercise: (input) => dispatch({type: 'ADD_NEW_EXERCISE', value: input.toLowerCase() }),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);