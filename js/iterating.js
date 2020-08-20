(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let names = ['Margaery', 'Arya', 'Daenerys', 'Brienne'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
for (let a = names.length; a > 0; a--) {
    console.log(names[a - 1]);
}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
names.forEach(function (name) {
    console.log(name);
});
names.forEach(name => {
    console.log(name);
})
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
function firstElement(a) {
    return a[0];
}
function secondElement(b) {
    return b[1];
}
function lastElement(c) {
    return c[c.length - 1];
}
})();

//using TDD method:
function firstElement(a) {
    return a[0];
}
function secondElement(b) {
    if (b.length < 2) {
        return b[0];
    } else {
        return b[1];
    }
}
function lastElement(c) {
    return c[c.length - 1];
    //return c.slice(-1)[0];
}
