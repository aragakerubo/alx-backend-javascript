import { readDatabase } from "../utils.js";

export default class StudentsController {
    static async getAllStudents(req, res) {
        const databasePath = process.argv[2];
        try {
            const students = await readDatabase(databasePath);
            let response = "This is the list of our students\n";
            for (const [field, names] of Object.entries(students).sort()) {
                response += `Number of students in ${field}: ${
                    names.length
                }. List: ${names.join(", ")}\n`;
            }
            res.status(200).send(response.trim());
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        if (!["CS", "SWE"].includes(major)) {
            res.status(500).send("Major parameter must be CS or SWE");
            return;
        }
        const databasePath = process.argv[2];
        try {
            const students = await readDatabase(databasePath);
            const majorStudents = students[major] || [];
            res.status(200).send(`List: ${majorStudents.join(", ")}`);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}
