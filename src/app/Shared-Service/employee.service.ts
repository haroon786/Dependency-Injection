import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../employee-modal/employee-data';
import { LoggingService } from './logging.service';
import { AnimalService } from './animal/animal.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeName = '👨';
  public static count=0;
  constructor()
  {

    console.log(`in employee  service constructor ${EmployeeService.count}`)
  }

  // getEmployees()
  // {
  //   this.loggservice.log(`employees fetched successully`)
  //   return EMPLOYEES;
  // }
  getFlower()
  {
    console.log(`get flower in employee service`)
    return this.employeeName= '👩‍🚀';
  }
}
