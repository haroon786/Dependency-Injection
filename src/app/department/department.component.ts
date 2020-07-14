import { Component, OnInit, Optional, Self } from '@angular/core';
import { EmployeeService } from '../Shared-Service/employee.service';
import { DepartmentService } from './shared/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers:[{provide:DepartmentService,useValue: { name: 'haroon' } }]
})
export class DepartmentComponent implements OnInit {

  constructor(private employeeservice:DepartmentService) {
    console.log(`here in department `)
  }

  ngOnInit(): void {
  }

}
