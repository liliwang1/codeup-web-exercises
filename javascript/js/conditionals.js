"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(color) {
    if (color === "blue") {
        return "blue is the color of the sky";
    } else if (color === "red") {
        return "Strawberries are red";
    } else {
        return "I don't know anything about " + color;
    }
}
console.log(analyzeColor('white'));
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
console.log("your random color is: " + randomColor + '\n' + analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor1(color) {
    switch (color.toLowerCase()) {
        case "blue":
            return "blue is the color of the sky";
        case "red":
            return "Strawberries are red";
        default:
            return "I don't know anything about " + color;
    }
}
analyzeColor1(randomColor);
console.log(analyzeColor1(randomColor));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt("type a color:");
var userColor = prompt("type a color:").toLowerCase();
alert(analyzeColor(userColor));
alert(analyzeColor1(userColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var luckyNumber1 = Math.floor(Math.random() * 5);
console.log(luckyNumber1);
var totalAmount1 = Number(prompt("what's your toal amount?"));
console.log(totalAmount1);
function calculateTotal(luckynumber, totalamount){
    switch (luckynumber) {
        case 1:
            return totalamount - totalamount * 0.1;
        case 2:
            return totalamount - totalamount * 0.25;
        case 3:
            return totalamount - totalamount * 0.35;
        case 4:
            return totalamount * 0.5;
        case 5:
            return 0;
        default:
            return totalamount;
    }
}
calculateTotal(luckyNumber1, totalAmount1);
// console.log("your total amount is $" + calculateTotal(luckyNumber1, totalAmount1));

function calculateTotal1(Luckynumber, Totalamount) {
    if (Luckynumber === 1) {
        return Totalamount - Totalamount * 0.1;
    } else if (Luckynumber === 2) {
        return Totalamount - Totalamount * 0.25;
    } else if (Luckynumber === 3) {
        return Totalamount - Totalamount * 0.35;
    } else if (Luckynumber === 4) {
        return Totalamount * 0.5;
    } else if (Luckynumber === 5) {
        return 0;
    } else {
        return Totalamount;
    }
}
calculateTotal1(luckyNumber1, totalAmount1);
// console.log("your total amount is $" + calculateTotal1(luckyNumber1, totalAmount1));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = Number(prompt("What's your total bill?"));
alert("Your lucky number is " + luckyNumber + ". \ " +
    "Your bill before the discount is " +  totalBill + ". \ " +
    "Your bill after the discount is " + calculateTotal(luckyNumber, totalBill) + ".");

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
if (confirm("Do you want put a number?")) {
    var userNumber = Number(prompt("your number is : "));
    if (typeof userNumber === "number") {
// if (!isNaN(userNumber))
        if (userNumber % 2 === 0) {
            alert("your input is an even number.");
        } else {
            alert("your input is an odd number.");
        }
//  (userNumber % 2 === 0) ? alert("your input is an even number.") : alert("your input is an odd number.");
        alert("your input plus 100 equal to " + (userNumber + 100));

        if (userNumber > 0 ) {
            alert("your input is positive.");
        } else if (userNumber < 0 ) {
            alert("your input is negative.");
        } else {
            alert("your input is 0, it's neither positive nor negative.");
        }

    } else {
        alert("your input is not a number!");
    }
}
// refactoring to function:
// if (confirm("Do you want put a number?")) {
//     var userNumber = Number(prompt("your number is : "));
//     function userNumberTesting(userNumber) {
//         return userNumber + 100;
//     }
// }
function numberProperty() {
    if (confirm("Do you want put a number?")) {
        var userNumber1 = Number(prompt("your number is : "));
        if (typeof userNumber1 === "number") {

            if (userNumber1 % 2 === 0) {
                alert("your input is an even number.");
            } else {
                alert("your input is an odd number.");
            }

            alert("your input plus 100 equal to " + (userNumber1 + 100));

            if (userNumber1 > 0 ) {
                alert("your input is positive.");
            } else if (userNumber1 < 0 ) {
                alert("your input is negative.");
            } else {
                alert("your input is 0, it's neither positive nor negative.");
            }

        } else {
            alert("your input is not a number!");
        }
    }
}
numberProperty();
// or
var numberProperty1 = function() {
    if (confirm("Do you want put a number?")) {
        var userNumber1 = Number(prompt("your number is : "));
        if (typeof userNumber1 === "number") {

            if (userNumber1 % 2 === 0) {
                alert("your input is an even number.");
            } else {
                alert("your input is an odd number.");
            }

            alert("your input plus 100 equal to " + (userNumber1 + 100));

            if (userNumber1 > 0 ) {
                alert("your input is positive.");
            } else if (userNumber1 < 0 ) {
                alert("your input is negative.");
            } else {
                alert("your input is 0, it's neither positive nor negative.");
            }

        } else {
            alert("your input is not a number!");
        }
    }
}
numberProperty1();