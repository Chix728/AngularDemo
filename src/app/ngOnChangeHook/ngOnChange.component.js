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
var ngOnChangeComponent = (function () {
    function ngOnChangeComponent() {
    }
    ngOnChangeComponent.prototype.ngOnChanges = function (changes) {
        for (var propertyName in changes) {
            var change = changes[propertyName];
            var current = JSON.stringify(change.currentValue);
            var prev = JSON.stringify(change.previousValue);
            this.current = current;
            this.previous = prev;
        }
    };
    return ngOnChangeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ngOnChangeComponent.prototype, "simpleChange", void 0);
ngOnChangeComponent = __decorate([
    core_1.Component({
        selector: 'on-change',
        template: "\n    <h1>This is ngOnChange Component</h1>\n    Enter text:<input type='text' [(ngModel)]='simpleChange'>\n    You entered:{{simpleChange}}\n    \n    "
    })
], ngOnChangeComponent);
exports.ngOnChangeComponent = ngOnChangeComponent;
//# sourceMappingURL=ngOnChange.component.js.map