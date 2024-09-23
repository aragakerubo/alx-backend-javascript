// 5. Create a more complex HTTP server using Node's HTTP module

const http = require('http');
const fs = require('fs');

const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const lines = data
        .trim()
        .split('\n')
        .slice(1)
        .filter((line) => line.length > 0);

      const fields = {};

      for (const line of lines) {
        const student = line.trim().split(',');
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
      }

      resolve({ length: lines.length, students: fields });
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');

    countStudents(process.argv[2])
      .then((data) => {
        res.write(`Number of students: ${data.length}\n`);
        for (const field in data.students) {
          if (field) {
            res.write(
              `Number of students in ${field}: ${
                data.students[field].length
              }. List: ${data.students[field].join(', ')}\n`,
            );
          }
        }
        res.end();
      })
      .catch((error) => {
        res.end(error.message);
      });
  }
});

app.listen(port);

module.exports = app;
