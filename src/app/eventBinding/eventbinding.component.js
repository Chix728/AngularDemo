"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var eventbindingComponent = (function () {
    function eventbindingComponent() {
        this.ShowDetails = true;
    }
    eventbindingComponent.prototype.onClick = function () {
        alert('Hi');
        console.log('Button is clicked!!');
    };
    eventbindingComponent.prototype.toggleDetails = function () {
        this.ShowDetails = !this.ShowDetails;
        console.log(this.ShowDetails);
    };
    return eventbindingComponent;
}());
eventbindingComponent = __decorate([
    core_1.Component({
        selector: 'event-binding',
        templateUrl: 'app/eventBinding/eventbinding.component.html',
        styleUrls: ['app/eventBinding//eventbinding.component.html']
    })
], eventbindingComponent);
exports.eventbindingComponent = eventbindingComponent;
//# sourceMappingURL=eventbinding.component.js.map