"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
var isAdmin = false;
if (isAdmin === true) {
    //show navbar
}

//TODO Together: Send a 20% off coupon if its users birthday
var birthday = true;
if (birthday) {
    //send coupon
}

if (birthday === true) {
    //send coupon
}

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
var isRainy = true;
if (isRainy) {
    alert("It's raining");
}

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
var itemCost = 300;
var currentBalance = 200;
if (itemCost <= currentBalance) {
    alert("You have enough money to buy the item.");
}

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
var numberOfLives = 10;
if (numberOfLives === 0) {
    alert("Sorry, game over");
}
// function gameOver(numberOfLives) {
//     return numberOfLives === 0 && alert("game over");
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
var weather = "snowing"
if (weather === "snowing") {
    alert("It's snowing!");
}
//refactor method 1:
function checkWeather(weather) {
    if (weather === "snowing") {
        alert("It's snowing!!");
    }
}
checkWeather(weather);
//refactor method 2:
var checkWeather1 = function (weather) {
    if (weather === "snowing") {
        alert("It's snowing!!!");
    }
}
checkWeather1(weather);

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
var numberInput = 11;
if (numberInput > 10) {
    alert(true); //alert("true") ??
}

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.



// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
var isAdmin1 = false;
if (isAdmin1) {
    alert("admin navabr");
} else {
    alert("non-admin navbar");
}

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
var isRainy1 = true;
if (isRainy1) {
    alert("It's raining");
} else {
    alert("habe a nice day!");
}

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
var numberOfLives1 = 5;
if (numberOfLives1 === 0) {
    alert("Sorry, game over");
} else {
    alert("Next Level!");
}
//refactor to a function:
function checkIfGameIsOver(numberOfLives1) {
    if (numberOfLives1 === 0) {
        alert("Sorry, game over");
    } else {
        alert("Next Level!");
    }
}
checkIfGameIsOver(numberOfLives1);
//refactor to ternary operator:
function checkIfGameIsOver1(numberOfLives2) {
   (numberOfLives2 === 0) ? alert("Sorry, game over") : alert
   ("Next Level!");
}
checkIfGameIsOver1();
// another way to present it:
alert((numberOfLives2 === 0) ? "sorry game over" : "next level")

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
var weather1 = "snowing";
if (weather1 === "snowing") {
    alert("It's snowing!");
} else {
    alert("Check back later for more details!");
}
// another syntax used by some people, not recommended!!
// if (weather === "snowing") alert("It's snowing!");
// else alert("Check back later for more details!");

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
var numberInput1 = 11;
if (numberInput1 > 10) {
    alert(true);
    alert("Number is " + numberInput1);
} else {
    alert("the number is less than 10");
}

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
var confirmed = confirm("are you 13 years of age or older?");
if (confirmed) {
    alert("You may proceed");
} else {
    alert("Sorry, you are not able to proceed");
}
//refactor to a function, which could be called throughout the code instead of just get executed once
function oldEnough() {
    var confirmed = confirm("are you 13 years of age or older?");
    if (confirmed) {
        alert("You may proceed");
    } else {
        alert("Sorry, you are not able to proceed");
    }
}
oldEnough(); //calling the function oldEnough
// refactor: using default perimeter
function oldEnough1(confirmed1 = confirm("are you 13 years of age or older?")) {
    if (confirmed1) {
        alert("You may proceed");
    } else {
        alert("Sorry, you are not able to proceed");
    }
}
oldEnough1();
//refactor: using ternary operator
confirm("are you at least 13 old?") ? alert("proceed") : alert("may not proceed");

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
var weather2 = "snowing";
if (weather2 === "snowing") {
    alert("It's snowing!");
} else if (weather2 === "raining") {
    alert("It's raining!");
} else {
    alert("have a nice day");
}

//TODO Together: refactor the above statement as a function
function checkWeather2(weather21) {
    if (weather21 === "snowing") {
        alert("It's snowing!");
    } else if (weather21 === "raining") {
        alert("It's raining!");
    } else {
        alert("have a nice day");
    }
}
checkWeather2(weather2);

//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.
function behaviorOfPerson(trafficLightColor) {
    if (trafficLightColor === "red") {
        alert("stop");
    } else if (trafficLightColor === "green") {
        alert("proceed");
    } else if (trafficLightColor === "yellow") {
        alert("proceed with caution");
    } else {
        alert("light is not working");
    }
}
behaviorOfPerson("red");


// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.
var age = 15;
var hasPermit = true;
if (age >= 15) {
   if (age >= 16) {
       if (hasPermit) {
           alert("eligible for a license");
       } else {
           alert("not eligible for a license");
       }
   } else {
       alert("eligible for a learner permit");
   }
} else {
    alert("not eligible for a learners permit");
}
//refactor to a function: notice eligibility(age = 0, hasPermit = false) part, default parameter.
function eligibility(age = 0, hasPermit = false) {
   if (age < 15) {
       alert("not eligible for a learners permit");
   } else {
       if (age === 15) {
           alert("eligible for a learners permit")
       } else if (age >= 16 && hasPermit) {
           alert("eligible for a licence") ;
       } else if (age >= 16 && !hasPermit) {
           alert("not eligible for a license");
       }
   }
}
age = prompt("how old are you?");
hasPermit = confirm("do you have a permit?")
eligibility(age, hasPermit); // need more work

// ================ TERNARY STATEMENT ================
// (condition) ? if body here : else body here;
//TODO Together: Regular way - rewrite as ternary

var message;
var success = true;

if (success) {
    message = "Operation was successful.";
} else {
    message = "Oops, something went wrong.";
}
console.log(message);

//WRITE YOUR TERNARY STATEMENT HERE!
(success) ? message = "Operation was successful." : message = "Oops, something went wrong.";
console.log(message);
// another way to refactor to a ternary operator.!!!
var message1 = (success) ? "operation was successful." : "oops something went wrong"
console.log(message1);
// null can be put at the action here to indicate no value
var message2 = (success) ? "successful" : null;


//TODO: Refactor the following conditional as a ternary

var weather = "sunny";
var weatherMessage;

if(weather === "rainy"){
   weatherMessage = "It's raining!";
} else {
    weatherMessage = "Have a nice day!";
}
console.log(weatherMessage);

//WRITE YOUR TERNARY STATEMENT HERE!
weatherMessage = (weather === "rainy") ? "It's raining!" : "Have a nice day!";
console.log(weatherMessage);

// =============== SWITCH STATEMENT ================
//TODO Together:

var pizzaPreference = prompt("What kind of pizza do you like?");
console.log("User pizza input: " + pizzaPreference);

if (pizzaPreference === "pineapple and hot sauce") {
    alert("What a coincidence, that's my favorite!");
} else if (pizzaPreference === "cheese") {
    alert("Just plain cheese? Okay...");
} else if (pizzaPreference === "ham") {
    alert("Ham is easy to spell and awesome!");
} else {
    alert(pizzaPreference + " isn't my favorite, but let's order some!");
}
// refactor to switch statement:
switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}
// using return in a function instead of using break, return also break out of the statement
function orderPizza(pizzaPreference) {
switch(pizzaPreference) {
    case "pineapple and hot sauce":
        return alert("What a coincidence, that's my favorite!");
    case "cheese":
        return alert("Just plain cheese? Okay...");
    default:
        return alert(pizzaPreference + " isn't my favorite, but let's order some!");
}
}
orderPizza("ham");

//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
var weatherMessage3;
var weather3 = "rainy";
switch(weather3) {
    case "rainy":
        weatherMessage3 = "It's rainy";
        break;
    case "sunny":
        weatherMessage3 = "It's sunny";
        break;
    case "snow":
        weatherMessage3 = "It's snowing";
        break;
    default:
        weatherMessage3 = "come back for more info";
}

//TODO: Rewrite the intersection function from earlier as a switch statement.
var trafficMessage;
var trafficLight = "red";
switch (trafficLight) {
    case "red":
        trafficMessage = "stop";
        break;
    case "green":
        trafficMessage = "proceed";
        break;
    case "yellow":
        trafficMessage = "proceed with caution";
        break;
    default:
        trafficMessage = "light is broken";
        break;
}

trafficMessage = function(trafficLight) {
    switch (trafficLight) {
        case "red":
            return "stop";
        case "green":
            return"proceed";
        case "yellow":
            return "proceed with caution";
        default:
            return"light is broken";
    }
} // not working right now, need more work

// ================ REVERSE ENGINEERING =================
// Visit each of these links; outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output
//!!!

// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

