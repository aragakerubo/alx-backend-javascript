export class HolbertonClass {
    constructor(year, location) {
        this._year = year;
        this._location = location;
    }

    get year() {
        return this._year;
    }

    set year(year) {
        this._year = year;
    }

    get location() {
        return this._location;
    }

    set location(location) {
        this._location = location;
    }
}

export class StudentHolberton {
    constructor(firstName, lastName, holbertonClass) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._holbertonClass = holbertonClass;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    get holbertonClass() {
        return this._holbertonClass;
    }

    set holbertonClass(holbertonClass) {
        this._holbertonClass = holbertonClass;
    }

    get fullStudentDescription() {
        return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
    }
}

const class2019 = new HolbertonClass(2019, "San Francisco");
const class2020 = new HolbertonClass(2020, "San Francisco");

const listOfStudents = [
    new StudentHolberton("Guillaume", "Salva", class2020),
    new StudentHolberton("John", "Doe", class2020),
    new StudentHolberton("Albert", "Clinton", class2019),
    new StudentHolberton("Donald", "Bush", class2019),
    new StudentHolberton("Jason", "Sandler", class2019),
];

export default listOfStudents;
