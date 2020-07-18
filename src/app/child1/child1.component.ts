import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../Shared-Service/logging.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component implements OnInit {

  message:any;
  apivalues:any;
  constructor(private loggservice:LoggingService) { }

  ngOnInit(): void {

    this.message=this.loggservice.sayHello("child1");
    this.apivalues=this.loggservice.getConfigValues();
  }

}
