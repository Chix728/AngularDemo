import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'emp-count',
    templateUrl: 'app/employeeCount/employeeCount.component.html',
    styleUrls: ['app/employeeCount/employeeCount.component.css']

})
export class employeeCountComponent {
    @Input()
    all: number;
    @Input()
    male: number;
    @Input()
    female: number;
    @Output()
    countRadioSelectionChange:EventEmitter<string>=new EventEmitter<string>();
    selectedRadioValue:string="all";
    onRadioSelectionChange(){
        this.countRadioSelectionChange.emit(this.selectedRadioValue);
        console.log(this.selectedRadioValue);
    }
}