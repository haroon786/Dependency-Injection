import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Shared-Service/employee.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private employeeservice:EmployeeService) { }

  ngOnInit(): void {
  }

}
