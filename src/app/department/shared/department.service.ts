import { Injectable } from '@angular/core';
import { DepartmentListComponent } from '../department-list/department-list.component';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  emoji:string;

  constructor() {
    console.log(`ddd`)
   }


}
