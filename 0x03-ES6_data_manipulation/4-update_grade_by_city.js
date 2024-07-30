export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeEntry = newGrades.find(
        (newGrade) => newGrade.studentId === student.id
      );
      return {
        ...student,
        grade: gradeEntry ? gradeEntry.grade : "N/A",
      };
    });
}
