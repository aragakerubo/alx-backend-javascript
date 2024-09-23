// 8. Organize a complex HTTP server using Express
// StudentsController.js

const { readDatabase } = require("../utils");

const path = process.argv[2];

class StudentsController {
    static getAllStudents(request, response) {
        readDatabase(path)
            .then(({ allStudents }) => {
                response.status(200).send(
                    `This is the list of our students\n${Object.keys(
                        allStudents
                    )
                        .sort((a, b) =>
                            a.toLowerCase().localeCompare(b.toLowerCase())
                        )
                        .map(
                            (key) =>
                                `Number of students in ${key}: ${
                                    allStudents[key].length
                                }. List: ${allStudents[key]
                                    .map((student) => student.firstName)
                                    .join(", ")}`
                        )
                        .join("\n")}`
                );
            })
            .catch(() => response.status(500).send("Cannot load the database"));
    }

    static getAllStudentsByMajor(request, response) {
        const { major } = request.params;
        if (major !== "CS" && major !== "SWE") {
            response.status(500).send("Major parameter must be CS or SWE");
        } else {
            readDatabase(path)
                .then(({ allStudents }) => {
                    response
                        .status(200)
                        .send(
                            `List: ${allStudents[major]
                                .map((student) => student.firstName)
                                .join(", ")}`
                        );
                })
                .catch(() =>
                    response.status(500).send("Cannot load the database")
                );
        }
    }
}

module.exports = StudentsController;
