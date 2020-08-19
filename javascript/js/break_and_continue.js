'use strict';

function oddNumber() {
var i = 0;
while (i < 5000) {
    var userNumber = Number(prompt("Please enter an odd number between 1 and 50:"));
    i++;
    if (userNumber > 1 && userNumber < 50 && userNumber % 2 === 1) {break;}
}
    let output = "Number to skip is: " + userNumber + "\n\n";

    for (let a = 1; a < 51; a += 2) {
        if (a === userNumber) {
            output += "Yikes! Skipping number :" + userNumber + '\n';
            continue;
        }
        output += 'Here is an odd number: ' + a;
        if (a !== 49) output += '\n';
    }

    return output;
}


var j = 0;
while (j < 5000) {
    var userNumber1 = Number(prompt("Please enter an odd number between 1 and 50:"));
    j++;
    if (userNumber1 > 1 && userNumber1 < 50 && userNumber1 % 2 === 1) {break;}
}

do {
    var userNumber1 = Number(prompt("Please enter an odd number between 1 and 50:"));
} while(userNumber1 < 1 || userNumber1 > 50 || userNumber1 % 2 !== 1);

function oddNumber1(c) {
    c = userNumber1;
    var output1 = "Number to skip is: " + c + "\n\n";
    for (let b = 1; b < 51; b += 2) {
        if (b === c) {
            output1 += "Yikes! Skipping number :" + c + '\n';
            continue;
        }
        output1 += 'Here is an odd number: ' + b;
        if (b !== 49) output1 += '\n';
    }
    return output1;
}
// function oddNumber1(userNumber1) {
//     var output1 = "Number to skip is: " + userNumber1 + "\n\n";
//     for (let b = 1; b < 51; b += 2) {
//         if (b === userNumber1) {
//             output1 += "Yikes! Skipping number :" + userNumber1 + '\n';
//             continue;
//         }
//         output1 += 'Here is an odd number: ' + b;
//         if (b !== 49) output1 += '\n';
//     }
//     return output1;
// }
