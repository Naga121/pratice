import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngmaterialModule } from './angmaterial/angmaterial.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

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
import { Ng2SearchPipeModule } from 'ng2-search-filter';



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngmaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
