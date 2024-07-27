export default function createReportObject(employeesList) {
    const empObj = {
        allEmployees: employeesList,
        getNumberOfDepartments(empList) {
            let empNum = 0;
            for (let department in empList) {
                for (let employee of department) {
                    empNum += 1;
                }
            }
            return empNum;
        },
    };
    return empObj;
}
