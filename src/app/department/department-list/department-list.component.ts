import { Component, OnInit, Optional, SkipSelf, Self } from '@angular/core';
import { EmployeeService } from 'src/app/Shared-Service/employee.service';
import {DepartmentService} from '../shared/department.service';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
  providers: [
    {provide: DepartmentService, useValue: {emoji: '🌺'}}
  ]
})
export class DepartmentListComponent implements OnInit {

  constructor(public ff:DepartmentService)
  {
      
  }

  ngOnInit(): void {
    console.log(this.ff.emoji)
  }

}
