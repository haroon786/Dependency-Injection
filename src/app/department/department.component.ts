import { Component, OnInit, Optional, Self } from '@angular/core';
import { EmployeeService } from '../Shared-Service/employee.service';
import { DepartmentService } from './shared/department.service';
import { LoggingService } from '../Shared-Service/logging.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  // providers:[{provide:DepartmentService,useValue: { name: 'haroon' } }]
})
export class DepartmentComponent implements OnInit {

  apivalues:any;
  constructor(private loggservice:LoggingService) {
    console.log(`here in department `)
  }

  ngOnInit(): void {
    this.apivalues=this.loggservice.getConfigValues();
  }

}
