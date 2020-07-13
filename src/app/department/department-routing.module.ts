import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DepartmentComponent } from "./department.component";
import { DepartmentListComponent } from "./department-list/department-list.component";

const routes: Routes = [
  {
    path: "",
    component: DepartmentComponent,
    children: [{ path: "departmentlist", component: DepartmentListComponent }],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentRoutingModule {}
