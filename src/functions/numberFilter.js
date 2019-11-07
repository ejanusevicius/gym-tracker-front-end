// Restricts input for the given textbox to the given inputFilter.
function numberFilter(evt) {
    var iKeyCode = (evt.which) ? evt.which : evt.keyCode
    if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
        return false;

    return true;
}

// Restrict input to digits and '.' by using a regular expression filter.
//setInputFilter(document.getElementById("myTextBox"), function(value) {
  //return /^\d*\.?\d*$/.test(value);
//});
export default numberFilter;