export default function updateStudentGradeByCity(studentList, city, newGrade) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  return studentList
    .filter((student) => student.location === city)
    .map((student) => ({ ...student, grade: newGrade }));
}
