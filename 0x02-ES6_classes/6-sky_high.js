import Building from "./5-building";

export default class skyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        this._floors = floors;
    }

    // getter
    get floors() {
        return this._floors;
    }

    // setter
    set floors(floors) {
        this._floors = floors;
    }

    // overriden method
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`;
    }
}
