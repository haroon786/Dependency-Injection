import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeTeamComponent } from './employee-team/employee-team.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LoggingService } from './Shared-Service/logging.service';
import {ErrorService} from '../app/Shared-Service/globalError/error.service';
import { UpdateLogService } from './Shared-Service/updatedLogService/update-log.service';
import { ApiConfig } from './apiConfig';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { apiConfigValue } from './apiConfig.value';
// const flag=false;
// const getLog=()=>
// {
//   if(flag)
//   {
//     return new LoggingService
//   }
//   else
//   {
//     return new UpdateLogService
//   }
// }
export const  configValue:ApiConfig=
{
  EndPoint:'abc.com',
  Token:'abctoken'
}
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeesListComponent,
    EmployeeTeamComponent,
    Child1Component,
    Child2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [

  {provide:apiConfigValue,useValue:configValue}],
  bootstrap: [AppComponent]
})
export class AppModule { }
