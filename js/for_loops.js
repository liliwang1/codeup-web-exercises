'use strict';

function returnMultiplicationTable(a) {
    let output = "";
    for (let i = 1; i < 11; i++) {
        output += a + " x " + i + " = " + a * i ;
        if (i !== 10) output += '\n'
    }
    return output;
}

function returnEvenOddMessage(b) {
    //validate input:
    if (!Number.isInteger(b)) return b + ' is invalid';
    //production code:
    if (b % 2 === 0) {
        return b + " is even";
    } else {
        return b + " is odd";
    }
}

function returnTenEvenOddMessages() {
    let output1 = "";
    for (let a = 0; a < 10; a++) {
        var randomNumber = Math. floor(Math. random() * (180 + 1) + 20);
        output1 += returnEvenOddMessage(randomNumber);
        if (a !== 9) output1 += '\n'
    }
    return output1;
}

function returnNumberSail() {
    let output2 = "";
    for (let b = 1; b < 10; b++) {
        for (let d = 0; d < b; d++) {
            output2 += b;
        }
            if (b !== 9) output2 += '\n'
        }
    return output2;
}

// function returnNumberSail() {
//     let str = ''
//     for (let i = 1; i < 10; i++) {
//         let j = i.toString()
//         str += j.repeat(i);
//
//         if (i !== 9) str += '\n'
//     }
//     return str;
// }

function returnCountDownFrom100InFives() {
    let output3 = '';
    for (let c = 100; c > 0; c -= 5) {
        output3 += c + "";
        if (c !== 5) output3 += '\n'
    }
    return output3;
}
