import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { employeeCountComponent } from './employeeCount/employeeCount.component';
import { eventbindingComponent } from './eventBinding/eventbinding.component';
import { employeeTitlePipe } from './ngFor/employeeTitle.pipe';
import { ngForComponent } from './ngFor/ngFor.component';
import { ngPipeComponent } from './ngPipe/ngPipe.component';
import { twoWayBindingComponent } from './twoWayBinding/twoWayBinding.componenet';

@NgModule({
  imports:      [ BrowserModule ,FormsModule],
  declarations: [ AppComponent,EmployeeComponent,eventbindingComponent,twoWayBindingComponent,
                ngForComponent,ngPipeComponent,employeeTitlePipe,employeeCountComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
