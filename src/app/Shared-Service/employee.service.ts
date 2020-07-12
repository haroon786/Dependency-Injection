import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../employee-modal/employee-data';
import { LoggingService } from './logging.service';
console.log(`instance of  emmployeeservice`)
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private loggservice:LoggingService) {
   }

  getEmployees()
  {
    this.loggservice.log(`employees fetched successully`)
    return EMPLOYEES;
  }
}
