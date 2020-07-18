import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorityRoutingModule } from './authority-routing.module';
import { AuthorityComponent } from './authority.component';
import { ApiConfig } from '../apiConfig';
import { apiConfigValue } from '../apiConfig.value';
import { LoggingService } from '../Shared-Service/logging.service';

export const  configValue:ApiConfig=
{
  EndPoint:'abc.com',
  Token:'authority'
}

@NgModule({
  declarations: [AuthorityComponent],
  imports: [
    CommonModule,
    AuthorityRoutingModule
  ],
  providers:[{provide:apiConfigValue,useValue:configValue}]
})
export class AuthorityModule { }
