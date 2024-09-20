// 5. Hooks

const sinon = require("sinon");
const sendPaymentRequestToAPI = require("./5-payment");

describe("sendPaymentRequestToAPI", () => {
    let consoleSpy;
    beforeEach(() => {
        consoleSpy = sinon.spy(console, "log");
    });
    afterEach(() => {
        consoleSpy.restore();
    });

    it("should log the correct message and only once", () => {
        sendPaymentRequestToAPI(100, 20);
        sinon.assert.calledOnce(consoleSpy);
        sinon.assert.calledWithExactly(consoleSpy, "The total is: 120");
    });

    it("should log the correct message and only once", () => {
        sendPaymentRequestToAPI(10, 10);
        sinon.assert.calledOnce(consoleSpy);
        sinon.assert.calledWithExactly(consoleSpy, "The total is: 20");
    });
});
