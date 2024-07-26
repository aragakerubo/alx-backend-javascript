export default class HolbertonClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    // getterfor size
    get size() {
        return this._size;
    }

    // setter for size
    set size(size) {
        this._size = size;
    }

    // getter for location
    get location() {
        return this._location;
    }

    // setter for location
    set location(location) {
        this._location = location;
    }

    // method that returns the size when class is cast into a number
    valueOf() {
        return this.size;
    }

    // method that returns the location when class is cast into a string
    toString() {
        return this.location;
    }
}
