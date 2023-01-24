
describe('function named sum', () => {
    //Write it functions here
    it("Takes 2 inputs and then sums them", () => {
        assert.equal(sum(2, 4), 6);
        assert.equal(sum(2, 10), 12);
    });

    it("Takes 3 inputs and then sums them", () => {
        assert.equal(sum(2, 4, 7), 13);
        assert.equal(sum(2, 10, 15), 27);
    });
});

describe('function named multiply', () => {
    //Write it functions here
    it("Takes 2 inputs and then multiply them", () => {
        assert.equal(multiply(2, 4), 8);
        assert.equal(multiply(2, 10), 20);
    });

    it("Takes 3 inputs and then multiply them", () => {
        assert.equal(multiply(2, 4, 7), 56);
        assert.equal(multiply(2, 10, 15), 300);
    });
});

describe('function named reverse', () => {
    //Write it functions here
    it("reverse a string", () => {
        assert.equal(reverse("abcdef"), "fedcba");
        assert.equal(reverse("I am a winner"), "renniw a ma I");
    });l
});

describe('function named filterLongWords', () => {
    //Write it functions here
    it("filter long words", () => {
        assert.deepEqual(filterLongWords( ['a', 'bbb', 'ascb', 'mmmm'], 3), ['bbb', 'ascb', 'mmmm' ]);
    });
});