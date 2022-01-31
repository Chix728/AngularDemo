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
var http_1 = require("@angular/http");
var observable_1 = require("rxjs/observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var employeeList = (function () {
    function employeeList(_http) {
        this._http = _http;
    }
    employeeList.prototype.getEmployeeList = function () {
        return this._http.get("http://localhost:63804/api/employees")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
        //return [
        //    { id: 1, name: 'Chirag', city: 'vadodara', gender: 'male' },
        //    { id: 2, name: 'Chix', city: 'Anand', gender: 'male' },
        //    { id: 3, name: 'Chku', city: 'Vidhyanagar', gender: 'male' },
        //    { id: 4, name: 'Dipu', city: 'San pedro sula', gender: 'female' },
        //    { id: 5, name: 'Cindrela', city: 'Las Vegas', gender: 'female' },
        //    { id: 6, name: 'Susane', city: 'Baja California', gender: 'female' },
        //    { id: 7, name: 'Chikky', city: 'Laos', gender: 'male' },
        //];
    };
    employeeList.prototype.getEmployeebyCode = function (Id) {
        return this._http.get("http://localhost:63804/api/employees/" + Id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
        //return [
        //    { id: 1, name: 'Chirag', city: 'vadodara', gender: 'male' },
        //    { id: 2, name: 'Chix', city: 'Anand', gender: 'male' },
        //    { id: 3, name: 'Chku', city: 'Vidhyanagar', gender: 'male' },
        //    { id: 4, name: 'Dipu', city: 'San pedro sula', gender: 'female' },
        //    { id: 5, name: 'Cindrela', city: 'Las Vegas', gender: 'female' },
        //    { id: 6, name: 'Susane', city: 'Baja California', gender: 'female' },
        //    { id: 7, name: 'Chikky', city: 'Laos', gender: 'male' },
        //];
    };
    employeeList.prototype.handleError = function (error) {
        console.error(error);
        return observable_1.Observable.throw(error);
    };
    return employeeList;
}());
employeeList = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], employeeList);
exports.employeeList = employeeList;
//# sourceMappingURL=employeeList.service.js.map