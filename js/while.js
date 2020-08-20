'use strict';

function squareTwo() {
    var i = 1;
    while (i < 32769) {
        console.log(i * 2);
        i = i * 2;
    }
}
function squareTwo1() {
    var num = 2;
    while (num < 65537) {
       console.log(num);
       num *= 2;
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
// instructor solution:
function sellCones() {
    var allCones = Math.floor(Math.random() * 50) + 50;
    do {
        var conesWanted = Math.floor(Math.random() * 5) + 1;
        if (conesWanted <= allCones) {
            console.log(conesWanted + " cones sold...");
            allCones -= conesWanted;
        } else {
            console.log("Cannot sell you " + conesWanted + " cones I only have " + allCones + "...");
        }
    } while (allCones > 0);
    console.log("Yay! I sold them all!");
}

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
