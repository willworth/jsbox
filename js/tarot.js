var card1;
var card2;
var card3;






function startTarot(){
    //generate 3 numbers  this is breaking DRY principle but ok for now
    var randomNumber = Math.random() * 22;  //generates between 0- 21
    var numFloored = Math.floor(randomNumber);//floors the num
     card1 = numFloored;

    var randomNumber = Math.random() * 22;  //generates between 0- 21
    var numFloored = Math.floor(randomNumber);//floors the num
     card2 = numFloored;

     var randomNumber = Math.random() * 22;  //generates between 0- 21
    var numFloored = Math.floor(randomNumber);//floors the num
     card3 = numFloored;






    alert ("Your reading for  " + today +
    " is \n \n" + card1 +", " + card2+ ", "+ card3 );
}





// GET DATE

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

today = dd+'/'+mm+'/'+yyyy;
//american formatting would be:
// today = mm+'/'+dd+'/'+yyyy;







// None (0 or 22)	The Fool
// 1	The Magician
// 2	The High Priestess
// 3	The Empress
// 4	The Emperor
// 5	The Hierophant
// 6	The Lovers
// 7	The Chariot
// 8	Justice
// 9	The Hermit
// 10	Wheel of Fortune
// 11	Strength
// 12	The Hanged Man
// 13	Death
// 14	Temperance
// 15	The Devil
// 16	The Tower
// 17	The Star
// 18	The Moon
// 19	The Sun
// 20	Judgement
// 21	The World