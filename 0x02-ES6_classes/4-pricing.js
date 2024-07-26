import Currency from "./3-currency";

export default class Pricing {
    constructor(amount, currency) {
        // chack if amount is of type number
        if (typeof amount !== "number") {
            throw new TypeError("amount must be a number");
        } else {
            this._amount = amount;
        }
        // check if currency is type Currency
        if (!(currency instanceof Currency)) {
            throw new TypeError("currency must be an instance of Currency");
        } else {
            this._currency = currency;
        }
    }

    // amount getter
    get amount() {
        return this._amount;
    }

    // amount setter
    set amount(amount) {
        if (typeof amount !== "number") {
            throw new TypeError("amount must be a number");
        } else {
            this._amount = amount;
        }
    }

    // currency getter
    get currency() {
        return this._currency;
    }

    // currency setter
    set currency(currency) {
        if (!(currency instanceof Currency)) {
            throw new TypeError("currency must be an instance of Currency");
        } else {
            this._currency = currency;
        }
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}
