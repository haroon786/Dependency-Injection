import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../Shared-Service/logging.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  message:any;
//  constructor(private loggservice:LoggingService) { }

  ngOnInit(): void {

  //  this.message=this.loggservice.sayHello("child2");
  }

}
