import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeTeamComponent } from './employee-team/employee-team.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LoggingService } from './Shared-Service/logging.service';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
