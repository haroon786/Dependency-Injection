import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../employee-modal/employee-data';
import { LoggingService } from './logging.service';
import { AnimalService } from './animal/animal.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeName = '👨';
  constructor(private loggservice:LoggingService)
  {
    console.log(`in employee  service constructor`)
  }

  getEmployees()
  {
    this.loggservice.log(`employees fetched successully`)
    return EMPLOYEES;
  }
  getFlower()
  {
    console.log(`get flower in employee service`)
    return this.employeeName= '👩‍🚀';
  }
}
