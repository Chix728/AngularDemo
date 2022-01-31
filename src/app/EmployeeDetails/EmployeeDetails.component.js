"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employeeList_service_1 = require("../ngFor/employeeList.service");
var EmployeeDetailsComponent = (function () {
    function EmployeeDetailsComponent(_employeeService, _activatedRoute) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var empId = this._activatedRoute.snapshot.params['Id'];
        this._employeeService.getEmployeebyCode(empId).subscribe((function (employeeData) {
            if (employeeData == null) {
                _this.statusMessage = "This id " + empId + " Doesn't Exist!!";
            }
            _this.employee = employeeData;
        }), function (error) {
            _this.statusMessage = "Service Not available API is Offline!!";
        });
    };
    return EmployeeDetailsComponent;
}());
EmployeeDetailsComponent = __decorate([
    core_1.Component({
        selector: 'emp-details',
        templateUrl: 'app/EmployeeDetails/EmployeeDetails.component.html',
        styleUrls: ['app/EmployeeDetails/EmployeeDetails.component.css']
    }),
    __metadata("design:paramtypes", [employeeList_service_1.employeeList, router_1.ActivatedRoute])
], EmployeeDetailsComponent);
exports.EmployeeDetailsComponent = EmployeeDetailsComponent;
//# sourceMappingURL=EmployeeDetails.component.js.map