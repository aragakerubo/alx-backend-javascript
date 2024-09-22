// 5. Create a more complex HTTP server using Node's HTTP module

const http = require('http');
const fs = require('fs');

const students = process.argv[2];

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    fs.readFile(students, 'utf8', (err, data) => {
      if (err) {
        res.write('Cannot load the database');
        res.end();
      } else {
        res.write('This is the list of our students\n');
        const lines = data.trim().split('\n').slice(1);
        const fields = {};
        lines.forEach((line) => {
          const student = line.trim().split(',');
          if (fields[student[3]]) {
            fields[student[3]].students.push(student[0]);
          } else {
            fields[student[3]] = {
              field: student[3],
              students: [student[0]],
            };
          }
        });

        res.write(`Number of students: ${lines.length}\n`);

        for (const field in fields) {
          if (Object.hasOwnProperty.call(fields, field)) {
            const element = fields[field];
            res.write(
              `Number of students in ${element.field}: ${
                element.students.length
              }. List: ${element.students.join(', ')}`,
            );

            if (
              field
                            !== Object.keys(fields)[Object.keys(fields).length - 1]
            ) {
              res.write('\n');
            }
          }
        }
        res.end();
      }
    });
  }
});

app.listen(1245);

module.exports = app;
