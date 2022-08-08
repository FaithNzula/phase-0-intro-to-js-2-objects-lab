// Write your solution in this file!
var employee = {
    name: "Abby",
    streetAddress:"Mua Hills"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
    const allEmployee = updateEmployeeWithKeyAndValue(
        newEmployee,
        "suzan"
        
        
    )

}
employee.name;

function deleteFromEmployeeByKey(employee, key , value) {
    let cutEmployees = { ...employee }
    cutEmployees[key] = value;
    return cutEmployees;
    let firedEmployee = deleteFromEmployeeByKey(
        

    )
};
delete cutEmployees.name;

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
     employee[key] = value;
     return employee;
    
 }
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const destructivelyDelete = destructivelyDeleteFromEmployeeByKey(employee, "roy");
    destructivelyDelete;
   }