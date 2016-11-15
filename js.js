// create Array
// establish line count and row count

// iterate for as many as required, alternating based on odd even
// insertline break when row limit reached
// when full array created, print to console


// var board =[1,2,58,666];
// var space = " ";
// var hash = "#";

// var columns = prompt("How wide do you want the board?");

// //test needed to confirm integer entry

// for (i = 0; i< columns.length; i++){
//     if (i %2 == 0){
//         board.push(space);
//     }else{
//         board.push(hash);
//     }
// }
// console.log(board);



// var columns = prompt("How wide do you want the board?");

// for (i = 0; i< columns.length; i++){
//     if(i%2==0){
//         document.write("O");
//     }else{
//         document.write("X");
//     }
//     document.write("The number is " + i + "<br>");
// }



var run = "#";


for(x=1; x<8; x++){
    console.log(run)
    run+="#";
}



var size = 82; //this is the variable setting

var board = "";//this is the empty string we're going to add either ' ' , '#' or newline

for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
  for (var x = 0; x < size; x++) {/*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
