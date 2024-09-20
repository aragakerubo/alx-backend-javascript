// 4. Stubs

const assert = require("assert");
const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./4-payment");

describe("sendPaymentRequestToApi", function () {
    it("should call Utils.calculateNumber", function () {
        const stub = sinon.stub(Utils, "calculateNumber").returns(10);
        const spy = sinon.spy(console, "log");
        sendPaymentRequestToApi(100, 20);
        assert.ok(stub.calledOnce);
        assert.ok(stub.calledWith("SUM", 100, 20));
        assert.ok(spy.calledOnce);
        assert.ok(spy.calledWith("The total is: 10"));
        stub.restore();
        spy.restore();
    });
});
