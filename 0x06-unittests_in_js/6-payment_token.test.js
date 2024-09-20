// 6. Async tests with done

const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", () => {
    it("should return the correct object if the promise resolves", (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).toEqual({
                    data: "Successful response from the server!",
                });
                done();
            })
            .catch((error) => done(error));
    });
});
