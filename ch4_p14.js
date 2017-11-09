// initialize variable for user input
var theString = "  ";

// ask user for input string until an empty string is entered
while (theString !== "") {

    theString = prompt("Enter a word or phrase:");
    var alertChar = theString.charAt(Math.floor(Math.random() * theString.length));
    
    // make sure output is not a space
    while ( alertChar === " ") {
        alertChar = theString.charAt(Math.floor(Math.random() * theString.length));
    }

    // alert a random letter from the input
    if (theString !== ""){
        alert( alertChar );
    }
}

