export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof name === "string") {
            this._name = name;
        } else {
            throw TypeError("Name must be a string");
        }
        if (typeof length === "number") {
            this._length = length;
        } else {
            throw TypeError("Length must be a number");
        }
        if (Array.isArray(students)) {
            this._students = students;
        } else {
            throw TypeError("Students must be an array");
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
            throw TypeError("Name must be a string");
        }
    }

    // length Getter
    get length() {
        return this._length;
    }

    // length Setter
    set length(length) {
        if (typeof length === "number") {
            this._length = length;
        } else {
            throw TypeError("Length must be a number");
        }
    }

    // students Getter
    get students() {
        return this._students;
    }

    // students Setter
    set students(students) {
        if (Array.isArray(students)) {
            this._students = students;
        } else {
            throw TypeError("Students must be an array");
        }
    }
}
