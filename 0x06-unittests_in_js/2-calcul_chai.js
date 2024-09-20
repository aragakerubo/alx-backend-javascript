// 2. Basic test using Chai assertion library

/**
 * Perform a simple calculation
 * @param {string} type - The operation type
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The result of the calculation
 */
function simpleCalc(type, a, b) {
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
}

module.exports = simpleCalc;
