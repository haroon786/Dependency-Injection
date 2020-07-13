import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  {path:'',component:EmployeeComponent},
{ path: 'department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) },
{ path: 'authority', loadChildren: () => import('./authority/authority.module').then(m => m.AuthorityModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
