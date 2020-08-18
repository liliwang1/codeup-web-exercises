describe('oddNumber1', function () {
    it('should be a defined function', function () {
        expect(oddNumber1).toBeDefined();
    });
    it('should return a string', function () {
        expect(typeof oddNumber1()).toBe('string');
    });
    it('should return expected result', function () {
        expect(oddNumber1(37)).toEqual("Number to skip is: 37\n\n" +
        "Here is an odd number: 1\n"  +
            "Here is an odd number: 3\n"  +
            "Here is an odd number: 5\n"  +
            "Here is an odd number: 7\n"  +
        "Here is an odd number: 9\n"  +
        "Here is an odd number: 11\n" +
        "Here is an odd number: 13\n" +
        "Here is an odd number: 15\n" +
        "Here is an odd number: 17\n" +
        "Here is an odd number: 19\n" +
        "Here is an odd number: 21\n" +
        "Here is an odd number: 23\n" +
        "Here is an odd number: 25\n" +
        "Here is an odd number: 27\n" +
        "Here is an odd number: 29\n" +
        "Here is an odd number: 31\n" +
        "Here is an odd number: 33\n" +
        "Here is an odd number: 35\n" +
        "Yikes! Skipping number :37\n" +
        "Here is an odd number: 39\n" +
        "Here is an odd number: 41\n" +
        "Here is an odd number: 43\n" +
        "Here is an odd number: 45\n" +
        "Here is an odd number: 47\n" +
        "Here is an odd number: 49");
    });
})