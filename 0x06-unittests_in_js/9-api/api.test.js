// 8. Basic Integration testing

const request = require("request");

describe("Server", () => {
    let expect;

    before(async () => {
        const chai = require("chai");

        expect = chai.expect;
    });

    it("Server should respond to GET requests", (done) => {
        request("http://localhost:7865/", (error, response, body) => {
            if (error) done(error);
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal("Welcome to the payment system");
            done();
        });
    });

    it("Server should respond to GET /cart/:id requests", (done) => {
        request("http://localhost:7865/cart/12", (error, response, body) => {
            if (error) done(error);
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal("Payment methods for cart 12");
            done();
        });
    });

    it("Server should respond to GET /cart/:id requests with an error if id is not a number", (done) => {
        request("http://localhost:7865/cart/hello", (error, response, body) => {
            if (error) done(error);
            expect(response.statusCode).to.equal(404);

            done();
        });
    });
});
