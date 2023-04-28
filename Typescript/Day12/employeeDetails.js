"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var department_1 = require("./department");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(fname, lname, salary, role) {
        this.fname = fname;
        this.lname = lname;
        this.salary = salary;
        this.dept = new department_1.Department(role);
    }
    EmployeeDetails.prototype.display = function () {
        console.log("\n                \n                    First Name  :: ".concat(this.fname, "\n                    Last name   :: ").concat(this.lname, "\n                    Salary      :: ").concat(this.salary, "\n                    Department  :: ").concat(this.dept.getRole(), "\n                \n                "));
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
