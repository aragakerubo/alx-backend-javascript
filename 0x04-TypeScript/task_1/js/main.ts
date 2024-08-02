interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "London",
    contract: false,
};

// console.log(teacher3);

// Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)
interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: "Jane",
    lastName: "Smith",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
};
