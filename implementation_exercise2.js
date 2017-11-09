var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
var operators = ["/", "+", "*", "-"];
var num1Str = "";

function calculate() {

    // get user input, get rid of spaces, and change -- to +
    var calculation = document.getElementById("calculationInput").value;
    calculation = calculation.replace(/\s/g, '');
    calculation = calculation.replace('--','+');

    // initialize variable for index of calculation string
    var index = 0;

    // get first num1Str
    num1Str = "";

    // check if first number is negated
    if (calculation.charAt(index) === "-") {
        num1Str += '-';
        index++;
    }

    while (digits.indexOf(calculation.charAt(index)) > -1) {
        num1Str += calculation.charAt(index);
        index++;
    }

    // get num2Str and operator and set next num1Str until at the last index
    while (index < calculation.length) {

        // check if character is valid
        if (operators.indexOf(calculation.charAt(index)) == -1 && digits.indexOf(calculation.charAt(index)) ){
            alert("This is an invalid calculation.");
            num1Str = "";
        }

        // get operator
        var operator = calculation.charAt(index);
        index++;

        // get second number
        var num2Str = "";

        // check if second numbers is negated
        if (calculation.charAt(index) === "-") {
            num2Str += '-';
            index++;
        }

        while (digits.indexOf(calculation.charAt(index)) > -1) {
            num2Str += calculation.charAt(index);
            index++;
        }

        // convert string number to int
        if (num1Str.indexOf(".") == -1) {
            var num1 = parseInt(num1Str);
        }
        else {
            var num1 = parseFloat(num1Str);
        }

        if (num2Str.indexOf(".") == -1) {
            var num2 = parseInt(num2Str);
        }
        else {
            var num2 = parseFloat(num2Str);
        }

        // perform operation and save to num1Str
        switch (operator) {
            case "/":
                num1Str = (num1 / num2).toString();
                break;
            case "*":
                num1Str = (num1 * num2).toString();
                break;
            case "-":
                num1Str = (num1 - num2).toString();
                break;
            case "+":
                num1Str = (num1 + num2).toString();

        }

    }

    // make sure final answer is valid before displaying in text input
    if (num1Str === "NaN") {
        alert("This is an invalid calculation.");
        document.getElementById("calculationInput").value = "";
    }
    else {
        document.getElementById("calculationInput").value = num1Str;
    }
}

// make buttons add to calculation input
function addChar(button) {
    document.getElementById("calculationInput").value += button.innerHTML;
}

// clear the calculator
function clearInput(){
    document.getElementById("calculationInput").value = " ";
}
