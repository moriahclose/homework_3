var arrayOfStrings = prompt("Enter a string").split(" ");
var result = "";

for (var i = 0; i < arrayOfStrings.length; i++){
    result += arrayOfStrings[i].charAt(0).toUpperCase();
}

alert(result);