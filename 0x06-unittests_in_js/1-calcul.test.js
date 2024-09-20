// 1. Combining descriptions

const assert = require("assert");
const simpleCalc = require("./1-calcul");

describe("simpleCalc function", () => {
    describe("when adding two numbers", () => {
        it("should return the sum of two numbers", () => {
            assert.strictEqual(simpleCalc("SUM", 1.4, 4.5), 6);
        });
    });

    describe("when subtracting two numbers", () => {
        it("should return the difference of two numbers", () => {
            assert.strictEqual(simpleCalc("SUBTRACT", 1.4, 4.5), -4);
        });
    });

    describe("when dividing two numbers", () => {
        it("should return the quotient of two numbers", () => {
            assert.strictEqual(simpleCalc("DIVIDE", 1.4, 4.5), 0.2);
        });
    });

    describe("when dividing two numbers", () => {
        it("should return an error message when the divisor is 0", () => {
            assert.strictEqual(simpleCalc("DIVIDE", 1.4, 0), "Error");
        });
    });

    describe("when the operation is invalid", () => {
        it("should return an error message", () => {
            assert.strictEqual(
                simpleCalc("INVALID", 1.4, 4.5),
                "Invalid operation"
            );
        });
    });
});
