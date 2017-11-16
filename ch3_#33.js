var myArray = new Array(3);

for (i = 0; i < 3; i++) {
    myArray[i] = new Array (4);
}
      myArray[0][0] = 9;
      myArray[0][1] = 8;
      myArray[0][2] = 2;
      myArray[0][3] = -5;

      myArray[1][0] = Math.PI;
      myArray[1][1] = 7;
      myArray[1][2] = 2.8;
      myArray[1][3] = 6;

      myArray[2][0] = -22;
      myArray[2][1] = 4;
      myArray[2][2] = 0;
      myArray[2][3] = 100;

      for (var i = 0 ; i<4; i++) {
          for (var j = 0 ; j<4; j++) {
              document.write(myArray[i][j] + "&emsp;");
              }
      }
      document.write("<br>");
