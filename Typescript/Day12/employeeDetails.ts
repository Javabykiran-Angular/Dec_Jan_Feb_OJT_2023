import {Employee} from './employee';
import {Department} from './department';


export class EmployeeDetails implements Employee{

            fname: string;
            lname: string;
            salary:number;
            dept:Department;

            constructor(fname:string,lname:string,salary:number,role:string){
                this.fname=fname;
                this.lname=lname;
                this.salary=salary;
                this.dept=new Department(role);
            }

            display() {
                console.log(`
                
                    First Name  :: ${this.fname}
                    Last name   :: ${this.lname}
                    Salary      :: ${this.salary}
                    Department  :: ${this.dept.getRole()}
                
                `)
            }
}