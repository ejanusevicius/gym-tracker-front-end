import generateId from '../functions/randomId';

import exerciseList from '../api_dummies/apiDummy';

const initialState = {
    isAddDataModalOn : false,
    searchPageNumber: 1,
    dataPageNumber: 1,
    activeExercise: 'squats',
    exerciseList: exerciseList,
    exerciseData: [{name: 'squats', data: [
        {date: "2019-09-01", weight: "60"}, {date: "2019-09-08", weight: "62"}, 
        {date: "2019-09-15", weight: "61"}, {date: "2019-09-22", weight: "64"},
        {date: "2019-09-29", weight: "61"}, {date: "2019-10-05", weight: "65"},
        {date: "2019-10-11", weight: "64"}, {date: "2019-10-19", weight: "68"},
        {date: "2019-10-26", weight: "68.5"}, {date: "2019-11-01", weight: "67"},
        {date: "2019-11-08", weight: "69"}, {date: "2019-11-16", weight: "70"},
    ]}]
};

const RootReducer = (state = initialState, action) => {

    if (action.type === 'TURN_ON_DATA_MODAL') {
        //make new state
        const newState = {...state};

        //change state to true
        newState.isAddDataModalOn = true;
        
        //return the updated stated
        return newState;
    }

    if (action.type === 'TURN_OFF_DATA_MODAL') {
        //make new state
        const newState = {...state};

        //change state to true
        newState.isAddDataModalOn = false;
        
        //return the updated stated
        return newState;
    }

    if (action.type === 'ADD_DATA_ENTRY') {
        //create a data object
        const dataEntry = {
            name: action.payload.name,
            data: {
                date: action.payload.date,
                weight: parseInt(action.payload.weight),
                id: generateId()
            }
        }

        //create new state
        const newState = {...state};
        newState.exerciseData = [...state.exerciseData];
        
        //make array of all exercises.
        const nameKeys = newState.exerciseData.map( el => el.name);

        //case if there is the exercise
        if(nameKeys.includes(action.payload.name)) {

            //name lowercasing
            const lowerCaseName = action.payload.name;

            //find index
            const index = newState.exerciseData.findIndex( el => el.name === lowerCaseName.toLowerCase());

            //push the payload into to that index
            newState.exerciseData[index].data.push(dataEntry.data);

            //disable the modal
            newState.isAddDataModalOn = false;

            return newState;

        //case if there is no exercise
        } else if(!nameKeys.includes(action.payload.name)) {
            //lowercasing
            const lowerCaseName = action.payload.name;
            //create the exercise
            const newExercise = {
                name: lowerCaseName.toLowerCase(),
                data: [{
                    date: dataEntry.data.date,
                    weight: dataEntry.data.weight
                }]
            }

            //push the new exercise
            newState.exerciseData.push(newExercise);

            //return new state
            return newState;
        }
    }

    if (action.type === 'DELETE_DATA_ENTRY') {
        //copy the state
        const newState = {...state};
        newState.exerciseData = [...state.exerciseData];

        //find the data entry array id
        const elementId = newState.exerciseData.findIndex( el => el.name === action.payload.name);

        //get ID
        const ID = action.payload.id;

        //find the index with the ID
        const dataId = newState.exerciseData[elementId].data.findIndex( el => el.id === ID);

        //splice that entry from the new state
        newState.exerciseData[elementId].data.splice(dataId, 1);

        //return new state
        return newState;
    }

    if (action.type === 'GO_TO_NEXT_PAGE') {
        //create new state
        const newState = {...state};

        //increment the page number
        if (state.dataPageNumber > 0) {
            newState.dataPageNumber = state.dataPageNumber + 1;
        }

        //return new state
        return newState;
    }

    if (action.type === 'GO_TO_PREVIOUS_PAGE') {
        //create new state
        const newState = {...state};

        //decrement the page numberr
        if (state.dataPageNumber > 0) {
            newState.dataPageNumber = state.dataPageNumber - 1;
        }

        //return new state
        return newState;
    }

    if (action.type === 'SEARCH_GO_TO_NEXT_PAGE') {

        //create new state
        const newState = {...state};
    
        //increment search page number
        if (state.searchPageNumber > 0) {
            newState.searchPageNumber = state.searchPageNumber + 1;
        }

        //return new state
        return newState;
    }

    if (action.type === 'SEARCH_GO_TO_PREVIOUS_PAGE'){
        //create new state
        const newState = {...state};

        //decrement search page
        if (state.searchPageNumber > 1 ) {
            newState.searchPageNumber = state.searchPageNumber - 1;
        }

        //return new state
        return newState;
    }

    if (action.type === 'RESET_SEARCH_PAGE_NUMBER') {

        const newState = {...state};

        newState.searchPageNumber = 1;

        return newState;
    }

    if (action.type === 'SET_ACTIVE_EXERCISE') {
        //create new state
        const newState = {...state};

        //set the activeExercise to the action.value
        newState.activeExercise = action.value;

        //return new state
        return newState;
    }

    if (action.type === 'CREATE_NEW_EXERCISE_DATA') {
        //create new state
        const newState = {...state};

        //push new data entry to the state
        newState.exerciseData.push(action.value);

        //return new state
        return newState;
    }

    if (action.type === 'RECREATE_STATE') {
        //create new state
        const newState = {...action.value};


        //return new state
        return newState;

    }

    if (action.type === 'ADD_NEW_EXERCISE') {
        //create new state
        const newState = {...state};

        //check if exercise exists
        if (newState.exerciseList.includes(action.value)) {
            //do nothing
        } else {
            //add exercise
            newState.exerciseList.push(action.value);
        }
        //return new state
        return newState;
    }


    //return old state if dispatch is not found.
    return state;
};

export default RootReducer;