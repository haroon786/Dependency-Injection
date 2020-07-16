import { Component, OnInit, SkipSelf, Host, Optional } from '@angular/core';
import { EmployeeService } from '../Shared-Service/employee.service';
import { AnimalService } from '../Shared-Service/animal/animal.service';
import {TestService} from  '../Shared-Service/TestServie/test.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
   providers:[{provide:EmployeeService,useClass:TestService}]
    // viewProviders:[{provide:AnimalService,useValue:{animalName:'using view providers :🐦'}}]
})
export class EmployeeComponent implements OnInit {

  employeeName:any;
  constructor(public employeeservice:EmployeeService)
      {
            console.log(`in employee component`);
      }

  ngOnInit() {
       this.employeeName=this.employeeservice.getFlower()
  }

}
