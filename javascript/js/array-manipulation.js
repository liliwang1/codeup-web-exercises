/*
    TODO: for each of the following function specifications, before writing out a solution, write out the tests for the function in array-manipulation-tests.js.
     The examples under each specification can be used for the some of the test cases.
*/

/*
    TODO: create a function, addToEnd, that takes in an array and a second argument that can be any value.
     The function will return the array with the second argument as an added final element.

    Examples...

    addToEnd([1, 2, 3], 4) will return [1, 2, 3, 4]
    addToEnd(['John', 'Sally', 'George'], 'Cathy') will return ['John', 'Sally', 'George', 'Cathy']
    addToEnd([4, null, true], ['wow']) will return [4, null, true, ['wow']]
 */



/*
    TODO: create a function, addToBeginning, that takes in a array and a second argument that is a single value.
     The function will return the array with the second argument an added first element of the output array.

    Examples...

    addToBeginning([1, 2, 3], 4) // returns [4, 1, 2, 3]
    addToBeginning(['John', 'Sally', 'George'], 'Cathy') // returns ['Cathy', 'John', 'Sally', 'George']
    addToBeginning([4, null, true], ['wow']) // returns [['wow'], 4, null, true]
*/



/*
    TODO: create a function, lopOffTwoFromEndAndAddToBeginning, that will take in an array of at least three elements and
     returns the array in a slightly reordered way, such that the last two elements appear as the first two elements.

    Examples...

    lopOffTwoFromEndAndAddToBeginning([1, 2, 3, 4, 5]) // returns [5, 4, 1, 2, 3]
    lopOffTwoFromEndAndAddToBeginning(['a', 'b', 'c', 'd', 'e']) // returns ['e', 'd', 'a', 'b', 'c']
    lopOffTwoFromEndAndAddToBeginning(['one', 'hmm', 4, 1]) // returns [1, 4, 'one', 'hmm']
 */



/*
    BONUS
    TODO: create a function, generateNavBar, that takes in an array of elements and returns a string of nav bar HTML
     where each element in the input array becomes a link in a nav bar.

    Examples...
    generateNavBar(['Home', 'About', 'Login']) // returns the following HTML string...
    <nav>
        <ul>
            <li>
                <a>Home</a>
            </li>
            <li>
                <a>About</a>
            </li>
            <li>
                <a>Login</a>
            </li>
        </ul>
    </nav>
 */



/*
    BONUS
    TODO: create a function, arrToCsv, that takes in a two dimensional array of strings and returns a CSV formatted string where the elements
     of the outer array are separated by new line characters and the inner array elements are separated by commas.

    Example...

    var exampleArray = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9']
    ];

    arrToCsv(exampleArray) // should return "1,2,3\n4,5,6\n7,8,9"
 */

/*
    BONUS
    TODO: create a function, csvToArr, that takes in a CSV formatted string and returns a two-dimensional array where the outer array
     contains an array for each line in the input string and each inner array is an array of each line's comma-separated values.

    Examples...
    csvToArr("1,2,3\n4,5,6\n7,8,9") // should return...
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
 */