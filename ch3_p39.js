// get hexadecimal from user
var inputHex = prompt("Enter a number in hexadecimal:");

// create output variable
var outputDecimal = 0;

// create array of characters in hex
var hexLettersUpper = ["A", "B", "C", "D", "E", "F"];
var hexLettersLower = ["a", "b", "c", "d", "e", "f"];
var hexNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// make sure input is a hex number
for (var i = 0; i < inputHex.length; i++) {
    if (hexLettersUpper.indexOf(inputHex.charAt(i)) == -1 && hexNumbers.indexOf(inputHex.charAt(i)) == -1 && hexLettersLower.indexOf(inputHex.charAt(i)) == -1) {
        alert("Please enter a hex value.");
        break;
    }
}

// create variable to hold current exponent
var exponent = 0;

// covert each input character to its hex equivalent
for (var i = inputHex.length - 1; i >= 0; i--) {
    if (hexNumbers.indexOf(inputHex.charAt(i)) > -1) {
        var convertNum = parseInt(inputHex.charAt(i));
        outputDecimal += convertNum * (16 ** exponent);
    }
    else if (hexLettersUpper.indexOf(inputHex.charAt(i)) > -1) {
        var convertNum = 10 + hexLettersUpper.indexOf(inputHex.charAt(i));
        outputDecimal += convertNum * (16 ** exponent);
    }
    else {
        var convertNum = 10 + hexLettersLower.indexOf(inputHex.charAt(i));
        outputDecimal += convertNum * (16 ** exponent);
    }
    exponent++;
}

// output the decimal equivalent of the input hex number
alert(outputDecimal);
