function formatDate(dateString) {
    //cut string
    const dateStringArray = dateString.split("-");

    //cut the "20" out of "20XX"
    const formattedYear = dateStringArray[0].slice(2,4);

    //rearrange the date array
    const newDateStringArray = [dateStringArray[2], dateStringArray[1], formattedYear];

    //join the array
    const newDateString = newDateStringArray.join("/");

    //return new string
    return newDateString;
}

export default formatDate;