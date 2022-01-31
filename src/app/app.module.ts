import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule ,Routes} from '@angular/router';
import { pageNotFoundComponent } from './404/pageNotFound';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { employeeCountComponent } from './employeeCount/employeeCount.component';
import { EmployeeDetailsComponent } from './EmployeeDetails/EmployeeDetails.component';
import { eventbindingComponent } from './eventBinding/eventbinding.component';
import { homeComponent } from './Home/home.component';
import { employeeList } from './ngFor/employeeList.service';
import { employeeTitlePipe } from './ngFor/employeeTitle.pipe';
import { ngForComponent } from './ngFor/ngFor.component';
import { ngOnChangeComponent } from './ngOnChangeHook/ngOnChange.component';
import { ngPipeComponent } from './ngPipe/ngPipe.component';
import { twoWayBindingComponent } from './twoWayBinding/twoWayBinding.componenet';

//routes
const routes: Routes = [
    { path: 'home', component: homeComponent },
    {path:'employee/:Id' ,component:EmployeeDetailsComponent},
    { path: 'employee', component: EmployeeComponent },
    { path: 'eventBinding', component: eventbindingComponent },
    { path: 'twoWayBinding', component: twoWayBindingComponent },
    { path: 'ngFor', component: ngForComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'**' , component:pageNotFoundComponent}
]

@NgModule({
    imports: [BrowserModule, FormsModule,HttpModule,RouterModule.forRoot(routes)],
    declarations: [AppComponent, EmployeeComponent, eventbindingComponent, twoWayBindingComponent,
        ngForComponent, ngPipeComponent, employeeTitlePipe, employeeCountComponent, ngOnChangeComponent, pageNotFoundComponent,homeComponent,EmployeeDetailsComponent],
    bootstrap: [AppComponent],
    providers:[employeeList]    
})
export class AppModule {
    
}
