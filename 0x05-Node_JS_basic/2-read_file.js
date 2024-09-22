// 2. Reading a file synchronously with Node JS

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n').slice(1);

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

    console.log(`Number of students: ${lines.length}`);
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
