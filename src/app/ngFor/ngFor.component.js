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
var employeeList_service_1 = require("./employeeList.service");
var ngForComponent = (function () {
    function ngForComponent(_employeeService) {
        this._employeeService = _employeeService;
        /**
         *
         */
        this.selectedEmployeeCountRadioButton = "all";
        this.statusMessage = 'No recoderds to show';
    }
    ngForComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployeeList()
            .subscribe(function (employeeData) { return _this.Employees = employeeData; }, function (error) { _this.statusMessage = 'There is problem with System Please try again after some time!!!'; });
        console.log("Data Employee" + this.Employees);
    };
    ngForComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    ngForComponent.prototype.getEmployees = function () {
        var _this = this;
        this._employeeService.getEmployeeList().subscribe(function (data) { return _this.Employees = data; });
    };
    ngForComponent.prototype.trackByEmployeeCode = function (index, employee) {
        return employee.id;
    };
    ngForComponent.prototype.getTotalEmployeesCount = function () {
        return this.Employees.length;
    };
    ngForComponent.prototype.getTotalMaleEmployeesCount = function () {
        return this.Employees.filter(function (e) { return e.gender.toLowerCase() === "male"; }).length;
    };
    ngForComponent.prototype.getTotalFemaleEmployeesCount = function () {
        return this.Employees.filter(function (e) { return e.gender.toLowerCase() === "female"; }).length;
    };
    return ngForComponent;
}());
ngForComponent = __decorate([
    core_1.Component({
        selector: 'ngFor',
        templateUrl: 'app/ngFor/ngFor.component.html',
        styleUrls: ['app/ngFor/ngFor.component.css'],
        providers: [employeeList_service_1.employeeList]
    }),
    __metadata("design:paramtypes", [employeeList_service_1.employeeList])
], ngForComponent);
exports.ngForComponent = ngForComponent;
//# sourceMappingURL=ngFor.component.js.map