// 5. Create a more complex HTTP server using Node's HTTP module

const http = require("http");
const fs = require("fs");

const students = process.argv[2];

const app = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello Holberton School!");
        res.end();
    } else if (req.url === "/students") {
        fs.readFile(students, "utf8", (err, data) => {
            if (err) {
                reject(new Error("Cannot load the database"));
                return;
            }
            const lines = data
                .trim()
                .split("\n")
                .slice(1)
                .filter((line) => line.length > 0);
            console.log(`Number of students: ${lines.length}`);
            const fields = {};
            for (const line of lines) {
                const student = line.trim().split(",");
                if (fields[student[3]]) {
                    fields[student[3]].students.push(student[0]);
                } else {
                    fields[student[3]] = {
                        field: student[3],
                        students: [student[0]],
                    };
                }
            }
            for (const field in fields) {
                if (fields[field]) {
                    const group = fields[field];
                    console.log(
                        `Number of students in ${group.field}: ${
                            group.students.length
                        }. List: ${group.students.join(", ")}`
                    );
                }
            }
            resolve();
        });
    }
});

app.listen(1245);

module.exports = app;
