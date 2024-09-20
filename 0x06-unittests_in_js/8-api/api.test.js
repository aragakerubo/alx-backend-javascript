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
});
