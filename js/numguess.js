
var guessCount = 0;
var guessText;
var guess;
var finished = false;

function startGame(){
    var randomNumber = Math.random() * 100;  //generates between 0- 99.99...
    var numFloored = Math.floor(randomNumber);//floors the num
    var goalNum = numFloored + 1; // this way it's 1-100 not 0-99

    while (!finished){




    guessText = prompt("Give me a number" +
                        "in the range of 1-100.\n\n" +
                        "What is the number?");
    guess = parseInt(guessText);
    guessCount +=1;
    alert("You guessed "+ guess);


    }
}   




// function startGame(){
//     alert("Here we go!", "other")
// }   


// function popup() {
// alert(guessCount);
//  }

// function popup() {
// alert("Guess a number between 1 -100!");
// }




function checkNumber() {
    if (isNaN(guess)) {
        alert ("You haven't entered a number!\n\n"+
        "Please enter a number between 1-100!");
        return false;
    }
    if ((guess <1) || (guess >100)) {

        alert("Please enter a number between 1-100!");
        return false
    }

}





// function getNum (){
// //generate answer
// var randomNumber = Math.random() * 100;  //generates between 0- 99.99...
// var numFloored = Math.floor(randomNumber);//floors the num
// var goalNum = numFloored + 1; // this way it's 1-100 not 0-99



//     var guess = prompt("Tell me your number")

// }








// popup describe game, then requestnum

// check num ok

// put num in var

// gen random num

// if num correct
// print correct
// else
// if high
// print too high and offer box to guess again

// if low 
// print too low and offer box to guess again