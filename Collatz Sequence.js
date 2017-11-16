var number = prompt();

var counter = 0;
var numList=[];
while(number > 1 || number < 10000){
   while(number !=1){
     if(number % 2 == 0) {
       number /=2;
     }
     else {
       number = (3 * number) + 1;
     }
     numList[counter] = number;
     counter++;
     alert (counter);
   }
}
