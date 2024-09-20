// 3. Spies

const assert = require("assert");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", () => {
    it("should validate the usage of the Utils function", () => {
        const spy = sinon.spy(Utils, "calculateNumber");
        sendPaymentRequestToApi(100, 20);
        assert.ok(spy.calledOnce);
        assert.ok(spy.calledWith("SUM", 100, 20));
        spy.restore();
    });
});
