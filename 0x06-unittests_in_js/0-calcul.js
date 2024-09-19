// 0. Basic test with Mocha and Node assertion library

/**
 * Sum two numbers
 * @param {number} a
 * @param {number} b
 * @return {number} sum of a and b
 */
function sum(a, b) {
    return Math.round(a) + Math.round(b);
}

module.exports = { sum };
