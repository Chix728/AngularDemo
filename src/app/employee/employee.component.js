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
var EmployeeComponent = (function () {
    function EmployeeComponent() {
        this.firstName = "Chirag";
        this.lastName = "Parmar";
        this.age = 23;
        this.gender = "Male";
        this.colSpan = 2;
        this.classTobeApply = 'boldClass colorClass';
        this.isBold = false;
        this.applyColorClass = true;
        this.applyBoldClass = true;
        this.applyItalicclass = true;
        this.fontSize = 25;
        this.color = 'green';
        this.fontStyle = 'italic';
        this.fontWeight = 'bold';
        this.isEnable = true;
        this.enableDisableText = '';
        this.isDisabled = false;
        this.showGender = false;
        this.showAge = false;
        this.showButtonText = 'show';
        this.isEnable = true;
        this.enableDisableText = "enable";
        console.log(this.enableDisableText);
    }
    EmployeeComponent.prototype.showHide = function () {
        this.showAge = !this.showAge;
        this.showGender = !this.showGender;
        if (this.showAge && this.showGender) {
            this.showButtonText = "Hide";
        }
        else {
            this.showButtonText = "Show";
        }
    };
    EmployeeComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicclass
        };
        return classes;
    };
    EmployeeComponent.prototype.addStyles = function () {
        var styles = {
            'font-size.px': this.fontSize,
            'color': this.color,
            'font-style': this.fontStyle,
            'font-weight': this.fontWeight
        };
        return styles;
    };
    EmployeeComponent.prototype.enableDisable = function () {
        console.log(this.enableDisableText);
        if (this.isEnable)
            this.enableDisableText = "Enable";
        else
            this.enableDisableText = "Disabled";
        this.isEnable = !this.isEnable;
        console.log(this.isEnable);
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'my-employee',
        templateUrl: 'app/employee/employee.component.html',
        styleUrls: ['app/employee/employee.component.css']
    }),
    __metadata("design:paramtypes", [])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map