

var location1 =3;
var location2 =4;
var location3 =5;

var guess;
var hits =0;
var guesses =0;

var isSunk= false;

while (isSunk == false){
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");
    if (guess <0 || guess >6){
alert("That's not a valid guess!");

    }  else {
        guesses =guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3){
            alert("hit!");
            hits = hits +1;

            if (hits ==3){
                isSunk= true;

                alert("you sunk the battleship!");
            }
            }else{
                alert("Miss!");
        }
    }

}
var stats = "you took " + guesses + " guesses to sink the battleship, " +
"which means your shooting accuracy was "+ (3/guesses);
alert(stats);