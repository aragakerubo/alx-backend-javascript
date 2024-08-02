// Write your code in the main.ts file:

// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location
// Requirements:

// When running, Webpack should return No type errors found.
// Every variable should use TypeScript when possible.

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "USA",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 23,
  location: "UK",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
document.body.appendChild(table);

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;

  row.appendChild(cell1);
  row.appendChild(cell2);

  table.appendChild(row);
});