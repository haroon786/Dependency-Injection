import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../Shared-Service/logging.service';

@Component({
  selector: 'app-authority',
  templateUrl: './authority.component.html',
  styleUrls: ['./authority.component.css']
})
export class AuthorityComponent implements OnInit {

  apivalues:any
  constructor(private loggservice:LoggingService) { }

  ngOnInit(): void {
    this.apivalues=this.loggservice.getConfigValues();
  }

}
