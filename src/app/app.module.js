"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var pageNotFound_1 = require("./404/pageNotFound");
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var employeeCount_component_1 = require("./employeeCount/employeeCount.component");
var EmployeeDetails_component_1 = require("./EmployeeDetails/EmployeeDetails.component");
var eventbinding_component_1 = require("./eventBinding/eventbinding.component");
var home_component_1 = require("./Home/home.component");
var employeeList_service_1 = require("./ngFor/employeeList.service");
var employeeTitle_pipe_1 = require("./ngFor/employeeTitle.pipe");
var ngFor_component_1 = require("./ngFor/ngFor.component");
var ngOnChange_component_1 = require("./ngOnChangeHook/ngOnChange.component");
var ngPipe_component_1 = require("./ngPipe/ngPipe.component");
var twoWayBinding_componenet_1 = require("./twoWayBinding/twoWayBinding.componenet");
//routes
var routes = [
    { path: 'home', component: home_component_1.homeComponent },
    { path: 'employee/:Id', component: EmployeeDetails_component_1.EmployeeDetailsComponent },
    { path: 'employee', component: employee_component_1.EmployeeComponent },
    { path: 'eventBinding', component: eventbinding_component_1.eventbindingComponent },
    { path: 'twoWayBinding', component: twoWayBinding_componenet_1.twoWayBindingComponent },
    { path: 'ngFor', component: ngFor_component_1.ngForComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: pageNotFound_1.pageNotFoundComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(routes)],
        declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, eventbinding_component_1.eventbindingComponent, twoWayBinding_componenet_1.twoWayBindingComponent,
            ngFor_component_1.ngForComponent, ngPipe_component_1.ngPipeComponent, employeeTitle_pipe_1.employeeTitlePipe, employeeCount_component_1.employeeCountComponent, ngOnChange_component_1.ngOnChangeComponent, pageNotFound_1.pageNotFoundComponent, home_component_1.homeComponent, EmployeeDetails_component_1.EmployeeDetailsComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [employeeList_service_1.employeeList]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map