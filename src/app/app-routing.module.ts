import { UpdateManagerComponent } from './Managers/update-manager/update-manager.component';


import { AddManagerComponent } from './Managers/add-manager/add-manager.component';
import { UpdateEmployeesComponent } from './Employees/update-employees/update-employees.component';
import { ListEmployeesComponent } from './Employees/list-employees/list-employees.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeesComponent } from './Employees/add-employees/add-employees.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListManagerComponent } from './Managers/list-manager/list-manager.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"",component:HomeComponent}, 
  {path:"aEmployee",component:AddEmployeesComponent},
  {path:"lEmployee",component:ListEmployeesComponent},
  {path:"uEmployee/:id",component:UpdateEmployeesComponent},
  {path:"aManager",component:AddManagerComponent},
  {path:"lManager",component:ListManagerComponent},
  {path:"uManager/:id",component:UpdateManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
