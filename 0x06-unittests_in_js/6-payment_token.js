// 6. Async tests with done

/**
 * Function that gets a payment token from an API
 * @param {boolean} success Indicates if the API call was successful
 * @returns {Promise} The result of the API call
 */
function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve({ data: "Successful response from the API" });
        }
    });
}

module.exports = getPaymentTokenFromAPI;
