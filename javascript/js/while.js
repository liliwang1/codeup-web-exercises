'use strict'

function twoSquare() {
    var i = 1;
    while (i < 32769) {
        console.log(i * 2 + '\n');
        i = i * 2;
    }
}

var a = Math. floor(Math. random() * (50 + 1) + 50);
console.log(a);
do {
    var b = Math. floor(Math. random() * (4 + 1) + 1);
    if (a < b) {
        console.log("cannot sell you " + b + " cones, I only have " + a);
        continue;
    }
    a -= b;
    if (a === 0) {
        console.log("sold last " + b + ". Yay! I sold them all!");
        break;
    }
    console.log(b + " cones sold. " + a + " left");
} while (a > 0);


// var a = Math. floor(Math. random() * (50 + 1) + 50);
// console.log(a);
// do {
//     var b = Math. floor(Math. random() * (4 + 1) + 1);
//     if (a < b) {
//         console.log("cannot sell you " + b + " cones, I only have " + a);
//         continue;
//     }
//     a -= b;
//     if (a === 0) {
//         console.log("sold last " + b + ". Yay! I sold them all!");
//         break;
//     }
//     if (b === 1) {
//         console.log(b + " cone sold. " + a + " left");
//     } else {
//         console.log(b + " cones sold. " + a + " left");
//     }
// } while (a > 0);
