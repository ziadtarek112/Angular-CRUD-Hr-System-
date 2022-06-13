
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AddEmployeesComponent } from './Employees/add-employees/add-employees.component';
import { ListEmployeesComponent } from './Employees/list-employees/list-employees.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { UpdateEmployeesComponent } from './Employees/update-employees/update-employees.component';
import { AddManagerComponent } from './Managers/add-manager/add-manager.component';
import { ListManagerComponent } from "./Managers/list-manager/list-manager.component";
import { UpdateManagerComponent } from './Managers/update-manager/update-manager.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEmployeesComponent,
    ListEmployeesComponent,
    HomeComponent,
    UpdateEmployeesComponent,
    AddManagerComponent,
    ListManagerComponent,
    UpdateManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
