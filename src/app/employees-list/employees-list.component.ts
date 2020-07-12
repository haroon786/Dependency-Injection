import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../employee-modal/employee-data';
import { IEmployee } from '../employee-modal/employee-modal';
import { EmployeeService } from '../Shared-Service/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees:IEmployee[];
  constructor(private employeeservice:EmployeeService)
  {
    console.log("in employee list");
  }


  ngOnInit() {
      this.getEmployees()
  }
  getEmployees()
  {
    this.employees=this.employeeservice.getEmployees()
  }


}
//
// export class EmployeeService
// {
//   constructor()
//   {

//   }
//   getemployess()
//   {
//     return EMPLOYEES
//   }
// }
