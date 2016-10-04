const TAX_RATE  = 1.23;
var bankBalance = prompt("How much money do you have in your bank acount?");
var fundsRemaining = prompt("How much would you like to have left\
after your spending spree?");
var price = prompt ("how much does the phone cost?")

console.log("You have entered " + price);


var numberOfPhones = 0;
var taxed = price * TAX_RATE;
taxed = taxed.toFixed(2);  //rounds to 2 decimal places
console.log("the total, with a tax rate of ", + TAX_RATE,  " is " + taxed );

while (bankBalance > fundsRemaining){
    bankBalance -= taxed;
    numberOfPhones +=1;
    console.log("Price is €" + taxed);

}
bankBalance =bankBalance.toFixed(2);
console.log ("we eneded up with a balance of" +
bankBalance + "and " + numberOfPhones + "new phones!")







// function titleCase(str) {
//  var amy = str.split(" ");
//   amy = str.toLowerCase();
//    return amy;
// }

// titleCase("I'm a little tea pot");
