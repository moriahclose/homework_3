var a, b, c;
var outputText;

function validate() {

a = document.forms["input_form"]["ainput"].value;
b = document.forms["input_form"]["binput"].value;
c = document.forms["input_form"]["cinput"].value;

if (a == 0) {
   outputText = "Can't equal zero!";
} else if (isNaN(a)) {
   outputText = "Must be a number.";
} else if (isNaN(b)) {
   outputText = "Must be a number.";
} else if (isNaN(c)) {
   outputText = "Must be a number.";
} else  {
    var x1 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    var x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    outputText = a + "x\u00B2 +" + b + "x + " + c + " = 0, x can equal " + x1 + " or " + x2;
 }
   document.getElementById("output_text").innerHTML = outputText;
}

//used a youtube tutorial by Daily Rant Australia for help. https://youtu.be/ePQ5zq3HE4A
