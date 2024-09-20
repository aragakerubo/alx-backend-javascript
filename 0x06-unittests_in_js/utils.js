// 3. Spies

/**
 * Utils
 * @exports Utils object
 * @description Utils object with a method calculateNumber that calculates two numbers
 */
const Utils = {
    /**
     * Calculate the number of a given type
     * @param {string} type - Type of calculation
     * @param {number} a - First number
     * @param {number} b - Second number
     * @return {number} The result of the calculation
     */
    calculateNumber(type, a, b) {
        const roundedA = Math.round(a);
        const roundedB = Math.round(b);

        switch (type) {
            case "SUM":
                return roundedA + roundedB;
            case "SUBTRACT":
                return roundedA - roundedB;
            case "DIVIDE":
                if (roundedB === 0) {
                    return "Error";
                }
                return roundedA / roundedB;
            default:
                return "Invalid operation";
        }
    },
};

module.exports = Utils;
