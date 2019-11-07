const formatString = (inputString) => {
    //split the string into an array
    const inputStringArray = inputString.split(' ');
    //make each element of the array start with a capital letter
    const capitalLetterStringArray = inputStringArray.map( el => el.charAt(0).toUpperCase() + el.slice(1) );
    //join the array together
    const newInputString = capitalLetterStringArray.join(' ');
    //return the array
    return newInputString;
};

export default formatString;