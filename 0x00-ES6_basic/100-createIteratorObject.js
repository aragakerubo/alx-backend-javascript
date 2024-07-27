export default function createIteratorObject(report) {
    const empList = report.allEmployees;
    const empArray = [];
    for (let department in empList) {
        for (let employee of empList[department]) {
            empArray.push(employee);
        }
    }
    return empArray;
}
