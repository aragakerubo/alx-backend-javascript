// 3. Reading a file asynchronously with Node JS

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data
        .trim()
        .split('\n')
        .slice(1)
        .filter((line) => line.length > 0);
      console.log(`Number of students: ${lines.length}`);
      const fields = {};
      for (const line of lines) {
        const student = line.trim().split(',');
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
            }. List: ${group.students.join(', ')}`,
          );
        }
      }
      resolve();
    });
  });
}

module.exports = countStudents;
