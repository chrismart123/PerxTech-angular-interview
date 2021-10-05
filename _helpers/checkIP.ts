export function validateIP(event): boolean {
    var dotCount;
    var maxDots: number = 3;
    var checkNumberOnly = (event.target.value);
    const charCode = (event.which) ? event.which : event.keyCode;
    var numeric = (event.target.value).toString();
    var checkNumeric;

    // reset dot counts
    if(checkNumberOnly === '') { dotCount = 0; }
    // check input char between 0-9 and dot
    if (charCode > 31 && (charCode < 46 || charCode > 57 || charCode==47)) { return false; }
    // check whole input less than 255 and if dot count is zero
    if((checkNumberOnly > 255 && dotCount === 0) ) { return false;}

    // if first input is zero prevent input aside from dot. 
    // sample expected input: 0.0.0.0
    if( numeric.substr(numeric.length - 1) === '0') {
        if(event.key != '.') { 
            checkNumeric = numeric.split('.');
            dotCount = checkNumeric.length-1;
            if((checkNumeric[dotCount]) == 0)
                return false;
        }
    }
    
    // check input with dot
    if (numeric + event.key.includes('.')) {
        checkNumeric = numeric.split('.');
        dotCount = checkNumeric.length-1;
        // cannot input double dot
        if( numeric.substr(numeric.length - 1) == '.' && event.key == '.' ) { return false; }
        // check if last input is dot
        if( dotCount >= maxDots ) { 
            if(event.key == '.')
                return false;
        }
        if ((checkNumeric[dotCount]+event.key) > 255) { return false; }
    } else { dotCount = 0; }

    return true;
}