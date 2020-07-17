import { Component } from '@angular/core';
import { EmployeeService } from './Shared-Service/employee.service';
import {AnimalService} from '../app/Shared-Service/animal/animal.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
//  providers:[{provide:EmployeeService,useValue:{emoji:'from the parent component'}}]

})
export class AppComponent {
  title = 'Dependency-Injection';
  constructor()
  {}
}
