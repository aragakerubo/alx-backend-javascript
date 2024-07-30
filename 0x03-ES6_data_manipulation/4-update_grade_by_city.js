export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const newStudentList = studentList.map((student) => {
    const studentCopy = { ...student };

    if (student.location === city) {
      const grade = newGrades.filter(
        (newGrade) => newGrade.studentId === student.id
      );

      if (grade.length > 0) {
        studentCopy.grade = grade[0].grade;
      } else {
        studentCopy.grade = "N/A";
      }

      return studentCopy;
    }

    return undefined;
  });

  return newStudentList.filter((student) => student !== undefined);
}
