// 3. Spies

const { expect } = require("chai");
const simpleCalc = require("./2-calcul_chai");

describe("simpleCalc function", () => {
    describe("when adding two numbers", () => {
        it("should return the sum of the two numbers", () => {
            const result = simpleCalc("SUM", 1.4, 4.5);
            expect(result).to.equal(6);
        });
    });

    describe("when subtracting two numbers", () => {
        it("should return the difference of the two numbers", () => {
            const result = simpleCalc("SUBTRACT", 1.4, 4.5);
            expect(result).to.equal(-4);
        });
    });

    describe("when dividing two numbers", () => {
        it("should return the division of the two numbers", () => {
            const result = simpleCalc("DIVIDE", 1.4, 4.5);
            expect(result).to.equal(0.2);
        });
    });

    describe("when dividing two numbers", () => {
        it("should return an error message if the divisor is 0", () => {
            const result = simpleCalc("DIVIDE", 1.4, 0);
            expect(result).to.equal("Error");
        });
    });

    describe("when the operation is not valid", () => {
        it("should return an error message", () => {
            const result = simpleCalc("INVALID", 1.4, 4.5);
            expect(result).to.equal("Invalid operation");
        });
    });
});
