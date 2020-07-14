import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Shared-Service/employee.service';
import { AnimalService } from '../Shared-Service/animal/animal.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
    providers:[{provide:EmployeeService,useValue:{emoji:'providers'}}],
    viewProviders:[{provide:AnimalService,useValue:{animalname:'using view providers'}}]
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeservice:EmployeeService,public animalservice:AnimalService) {
    console.log("in employee");
   }

  ngOnInit() {

  }

}
