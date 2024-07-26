export default class Currency {
    constructor(code, name) {
        if (typeof code === "string") {
            this._code = code;
        } else {
            throw TypeError("Code must be a String");
        }
        if (typeof name === "string") {
            this._name = name;
        } else {
            throw TypeError("Name must be a string");
        }
    }

    // code Getter
    get code() {
        return this._code;
    }

    // code Setter
    set code(code) {
        if (typeof code === "string") {
            this._code = code;
        } else {
            throw TypeError("Code must be a String");
        }
    }

    // name Getter
    get name() {
        return this._name;
    }

    // name Setter
    set name(name) {
        if (typeof name === "string") {
            this._name = name;
        } else {
            throw TypeError("Name must be a String");
        }
    }

    // method
    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}
