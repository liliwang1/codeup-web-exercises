"use strict";

console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
var userInput = prompt("What's your favorite color?");
alert("Great! " + userInput + " is my favorite color too!");

var theLittleMermaid = prompt("How many days do you have The little Mermaid movie?");
var brotherBear = prompt("How many days do you have Brother Bear movie?");
var hercules = prompt("How many days do you have Hercules movies?");
var pricePerDay = prompt("How much is the price for a movie per day?");
// console.log(theLittleMermaid);
// console.log(theLittleMermaid+brotherBear+hercules);
// console.log(Number(theLittleMermaid));
alert("The price you have to pay for all movies is $" + (Number(theLittleMermaid) + Number(brotherBear) + Number(hercules)) * Number(pricePerDay));
// instead of using Number(), just put a + in front of the string value, that would convert then into a number.
//alert((+theLittleMermaid + +brotherBear + +hercules)*3);
// also works: alert(3*theLittleMermaid + 3*brotherBear + 3*hercules) the * convert the string to a number.
// alert(theLittleMermaid*3 + brotherBear*3 + hercules*3) works too.

var payRateGoogle = prompt("How much does Google pay per hour?");
var payRateAmazon = prompt("How much does Amazon pay per hour?");
var payRateFacebook = prompt("How much does Facebook pay per hour?");
var workHoursGoogle = prompt("How many hours did you work for Google this week?");
var workHoursAmazon = prompt("How many hours did you work for Amazon this week?");
var workHoursFacebook = prompt("How many hours did you work for Facebook this week?");
var payment = Number(payRateGoogle) * Number(workHoursGoogle) + Number(payRateAmazon) * Number(workHoursAmazon) + Number(payRateFacebook) * Number(workHoursFacebook);
var confirmed = confirm('Are you sure you worked ' + workHoursGoogle + ' hours for Google for ' + payRateGoogle + ' per hour?');
var confirmed1 = confirm('Are you sure you worked ' + workHoursAmazon + ' hours for Amazon for ' + payRateAmazon + ' per hour?');
var confirmed2 = confirm('Are you sure you worked ' + workHoursFacebook + ' hours for Facebook for ' + payRateFacebook + ' per hour?');
alert("Your payment this week should be $" + payment);
alert(+payRateGoogle * +workHoursGoogle); // this is the unary operator method.

var classFullness = confirm("Is the class full?");
console.log(classFullness);
var scheduleConflict = confirm("does the schedule conflict?");
console.log(scheduleConflict);
var enrollment = !classFullness && !scheduleConflict;
console.log(enrollment);
// alert("Your enrollment result is " + enrollment);
if (enrollment) {
    alert("Your enrollment is accepted.");
} else {
    alert("Your enrollment is rejected.");
}

var premiumMember = confirm("Are you a premium member?");
console.log(premiumMember);
var itemPurchased = prompt("How many items are you buying?");
console.log(itemPurchased);
var expired = confirm("Has the offer expired?");
console.log(expired);
var offerApply = (premiumMember || itemPurchased > 2) && !expired;
console.log(offerApply);
if (offerApply) {
    alert("The offer will be applied.")
} else {
    alert("The offer will not apply.")
}



