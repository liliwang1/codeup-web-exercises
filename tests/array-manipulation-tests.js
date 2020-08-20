// Tests for addToEnd
describe("addToEnd", function() {
    // TODO: add a test to verify that the function is defined
    it('should be a defined function', function () {
        expect(addToEnd).toBeDefined();
    });
    // TODO: add a test with multiple assertions verifying that the function returns the correct output
    it('should return the correct result', function () {
        expect(addToEnd([1, 2, 3], 4)).toBe([1, 2, 3, 4]);
    });
    it('should return the correct result', function () {
        expect(addToEnd(['John', 'Sally', 'George'], 'Cathy')).toBe(['John', 'Sally', 'George', 'Cathy']);
    });
    it('should return the correct result', function () {
        expect(addToEnd([4, null, true], ['wow'])).toBe([4, null, true, ['wow']]);
    });
});


// Tests for addToBeginning
// TODO: add a test suite for addToBeginning, verifying that the function is defined (first test) and that it returns the expected output (second test)
describe('addToBeginning', function () {
    it('should be a defined function', function () {
        expect(addToBeginning).toBeDefined();
    });
    it('should return the correct result', function () {
        expect(addToBeginning([1, 2, 3], 4)).toBe([4, 1, 2, 3]);
    });
    it('should return the correct result', function () {
        expect(addToBeginning(['John', 'Sally', 'George'], 'Cathy')).toBe(['Cathy', 'John', 'Sally', 'George']);
    });
    it('should return the correct result', function () {
        expect(addToBeginning([4, null, true], ['wow'])).toBe([['wow'], 4, null, true]);
    });
})

// Tests for lopOffTwoFromEndAndAddToBeginning
// TODO: add a test suite for lopOffTwoFromEndAndAddToBeginning, verifying that the function is defined (first test)
//  and that it returns the expected output when passed an array of three or more elements (second test)
describe('lopOffTwoFromEndAndAddToBeginning', function () {
    it('should be a defined function', function () {
        expect(lopOffTwoFromEndAndAddToBeginning).toBeDefined();
    });
    it('should return correct result', function () {
        expect(lopOffTwoFromEndAndAddToBeginning([1, 2, 3, 4, 5])).toBe([5, 4, 1, 2, 3]);
    });
    it('should return correct result', function () {
        expect(lopOffTwoFromEndAndAddToBeginning(['a', 'b', 'c', 'd', 'e'])).toBe(['e', 'd', 'a', 'b', 'c']);
    });
    it('should return correct result', function () {
        expect(lopOffTwoFromEndAndAddToBeginning(['one', 'hmm', 4, 1)).toBe([1, 4, 'one', 'hmm']);
    });
})

// BONUSES

// Tests for generateNavBar
// TODO: add a test suite for generateNavBar, verifying that the function is defined (first test)
//  and that it returns the expected output when passed a valid input (second test)


// Tests for arrToCsv
// TODO: add a test suite for arrToCsv, verifying that the function is defined (first test)
//  and that it returns the expected output when passed a valid input (second test)


// Tests for csvToArr
// TODO: add a test suite for arrToCsv, verifying that the function is defined (first test)
//  and that it returns the expected output when passed a valid input (second test)