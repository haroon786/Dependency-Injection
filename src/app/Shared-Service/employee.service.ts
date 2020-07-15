import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../employee-modal/employee-data';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeName = '👨';
  constructor(private loggservice:LoggingService)
  {
    console.log(`instance of  emmployee---service`)
  }

  getEmployees()
  {
    this.loggservice.log(`employees fetched successully`)
    return EMPLOYEES;
  }
}
