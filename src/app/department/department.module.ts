import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { ApiConfig } from '../apiConfig';
import { apiConfigValue } from '../apiConfig.value';
import { LoggingService } from '../Shared-Service/logging.service';

export const  configValue:ApiConfig=
{
  EndPoint:'abc.com',
  Token:'department'
}

@NgModule({
  declarations: [DepartmentComponent, DepartmentListComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule
  ],
  providers:[{provide:apiConfigValue,useValue:configValue}]
})
export class DepartmentModule { }
