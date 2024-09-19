// 0. Basic test with Mocha and Node assertion library

const assert = require("assert");
const { sum } = require("./0-calcul");

describe("sum function", function () {
    it("should return the sum of two whole numbers", function () {
        assert.strictEqual(sum(1, 3), 4);
    });

    it("should return the rounded sum of a whole number and a float", function () {
        assert.strictEqual(sum(1, 3.7), 5);
    });

    it("should return the sum of two rounded floats", function () {
        assert.strictEqual(sum(1.2, 3.7), 5);
    });

    it("should return the sum of two rounded floats", function () {
        assert.strictEqual(sum(1.5, 3.7), 6);
    });

    it("should return the sum of two negative numbers", function () {
        assert.strictEqual(sum(-1, -3), -4);
    });

    it("should return the sum of a negative number and a positive number", function () {
        assert.strictEqual(sum(-1, 3), 2);
    });

    it("should return the sum of two rounded negative floats", function () {
        assert.strictEqual(sum(-1.2, -3.7), -5);
    });
});
