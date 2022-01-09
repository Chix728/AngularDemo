import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { IEmployee } from '../ngFor/Iemployee';
import { employeeCountComponent } from '../employeeCount/employeeCount.component'
import { employeeList } from "./employeeList.service";
import { error } from "console";
@Component({
    selector: 'ngFor',
    templateUrl: 'app/ngFor/ngFor.component.html',
    styleUrls: ['app/ngFor/ngFor.component.css'],
    providers:[employeeList]
})
export class ngForComponent implements OnInit {
    /**
     *
     */
    selectedEmployeeCountRadioButton: string = "all";
    Employees: IEmployee[];
    statusMessage: string = 'No recoderds to show';
    constructor(private _employeeService:employeeList) {
        
    }
    ngOnInit(): void {
        
        this._employeeService.getEmployeeList()
            .subscribe((employeeData) => this.Employees = employeeData,
                (error) => { this.statusMessage='There is problem with System Please try again after some time!!!' });
        console.log("Data Employee"+this.Employees);
    }
    
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

    getEmployees(): void {
        this._employeeService.getEmployeeList().subscribe((data) => this.Employees = data);
    }
    trackByEmployeeCode(index: number, employee: any) {
        return employee.id;
    }
    getTotalEmployeesCount(): number {
        return this.Employees.length;
    }
    getTotalMaleEmployeesCount(): number {
        return this.Employees.filter(e => e.gender.toLowerCase() === "male").length;
    }
    getTotalFemaleEmployeesCount(): number {
        return this.Employees.filter(e => e.gender.toLowerCase() === "female").length;
    }
}