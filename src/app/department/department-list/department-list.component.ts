import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Shared-Service/employee.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor()
  {
      console.log(`instance created here`)
  }

  ngOnInit(): void {
  }

}
