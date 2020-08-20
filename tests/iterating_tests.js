// Tests for first function
// TODO: add test suite for first function. Write tests to verify that the function is defined, returns undefined when passed an empty array, returns the element when passed an array of one element, and returns the correct element when passed an array of two or more elements.

describe('firstElement', function () {
    it('should be defined', function () {
        expect(firstElement).toBeDefined();
    });
    it('should return undefined when passed an empty array', function () {
        expect(firstElement([])).toBe(undefined);
    });
    it('should return the element when passed an array of one element', function () {
        expect(firstElement([1])).toBe(1);
    });
    it('should return the correct element when passed an array of two or more elements', function () {
        expect(firstElement([1, 2])).toBe(1);
        expect(firstElement([1, 2, 3])).toBe(1);
        expect(firstElement([1, 2, 3, 4])).toBe(1);
    });
})
// Tests for second function
// TODO: add test suite for second function. Write tests to verify that the function is defined, returns undefined when passed an empty array, returns the element when passed an array of one element, and returns the correct element when passed an array of two or more elements.

describe('secondElement', function () {
    it('should be defined', function () {
        expect(secondElement).toBeDefined();
    });
    it('should return undefined when passed an empty array', function () {
        expect(secondElement([])).toBe(undefined);
    });
    it('should return the element when passed an array of one element', function () {
        expect(secondElement([1])).toBe(1);
    });
    it('should return the correct element when passed an array of two or more elements', function () {
        expect(secondElement([1, 2])).toBe(2);
        expect(secondElement([1, 2, 3])).toBe(2);
        expect(secondElement([1, 2, 3, 4])).toBe(2);
    });
})
// Tests for last function
// TODO: add test suite for last function. Write tests to verify that the function is defined, returns undefined when passed an empty array, returns the element when passed an array of one element, and returns the correct element when passed an array of two or more elements.

describe('lastElement', function () {
    it('should be defined', function () {
        expect(lastElement).toBeDefined();
    });
    it('should return undefined when passed an empty array', function () {
        expect(lastElement([])).toBe(undefined);
    });
    it('should return the element when passed an array of one element', function () {
        expect(lastElement([1])).toBe(1);
    });
    it('should return the correct element when passed an array of two or more elements', function () {
        expect(lastElement([1, 2])).toBe(2);
        expect(lastElement([1, 2, 3])).toBe(3);
        expect(lastElement([1, 2, 3, 4])).toBe(4);
    });
})