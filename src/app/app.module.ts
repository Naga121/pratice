import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngmaterialModule } from './angmaterial/angmaterial.module';
import { EmpDataService } from './Service/emp-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './Parent-Chaild/users/users.component';
import { UserComponent } from './Parent-Chaild/user/user.component';
import { AddUserComponent } from './Child-Parent/add-user/add-user.component';
import { CustomDitectiveComponent } from './Directives/custom-ditective/custom-ditective.component';
import { RendererDirective } from './Directives/renderer.directive';
import { EmployeeComponent } from './DataTable/employee/employee.component';
import { EmployeesComponent } from './DataTable/employees/employees.component';
import { EmployeeListComponent } from './DataTable/employee-list/employee-list.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    AddUserComponent,
    CustomDitectiveComponent,
    RendererDirective,
    EmployeeComponent,
    EmployeesComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngmaterialModule,
    ReactiveFormsModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
