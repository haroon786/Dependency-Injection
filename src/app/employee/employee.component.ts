import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Shared-Service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeservice:EmployeeService) {
    console.log("in employee");
   }

  ngOnInit() {

  }

}
