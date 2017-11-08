function ch3(){
// get hexadecimal from user
var inputHex = prompt("Enter a number in hexadecimal:");

// create output variable
var outputDecimal = 0;

// create array of letters in hex
var hexLetters = ["A","B","C","D","E","F"];

// go through string from back to front
var exponent = 0;

for (var i = inputHex.length-1; i >= 0; i--){
    if (inputHex.charAt(i) < 0 || inputHex.charAt(i) > 9){
        var convertThis = 10 + inputHex.indexOf(inputHex.charAt(i));
    } 
    var convertThis = parseInt(inputHex.charAt(i));
    outputDecimal += (convertThis * (16 ** exponent));
    exponent++;
}

alert( outputDecimal );
}