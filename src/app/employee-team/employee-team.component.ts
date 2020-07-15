import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Shared-Service/employee.service';
import { AnimalService } from '../Shared-Service/animal/animal.service';

@Component({
  selector: 'app-employee-team',
  templateUrl: './employee-team.component.html',
  styleUrls: ['./employee-team.component.css']
})
export class EmployeeTeamComponent implements OnInit {

  constructor(public employeeservice:EmployeeService,public animmalservice:AnimalService) { }

  ngOnInit(): void {
  }

}
