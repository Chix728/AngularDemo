import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { IEmployee } from '../ngFor/Iemployee';
import { employeeCountComponent } from '../employeeCount/employeeCount.component'
import { employeeList } from "./employeeList.service";
import { error } from "console";
import { ActivatedRoute } from "@angular/router";
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
    Employee: IEmployee;
    statusMessage: string = 'Data is Loadning Please Wait!!!';
    constructor(private _employeeService: employeeList, private _activatedRoute: ActivatedRoute) {
        
    }
    ngOnInit(): void {
        this._employeeService.getEmployeeList().subscribe((data) => this.Employees = data);
        this._employeeService.getEmployeeList().subscribe((data) => this.Employees = data);
        let empId: number = this._activatedRoute.snapshot.params['Id'];
        this._employeeService.getEmployeebyCode(empId).subscribe(
            (employeeData => {
                if (employeeData == null) { this.statusMessage = "This id " + empId + " Doesn't Exist!!"; }
                this.Employee = employeeData
            }),
            (error) => {
                this.statusMessage = "Service Not available API is Offline!!";
            }

        )
    }
    
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
    getEmployees(): void {
        this._employeeService.getEmployeeList().subscribe((data) => this.Employees = data);
    }

    getEmployeebyCode(id:Number): void {
        this._employeeService.getEmployeebyCode(id).subscribe((data) => this.Employee = data);
    }
    trackByEmployeeCode(index: number, employee: any) {
        return employee.id;
    }
    getTotalEmployeesCount(): number {
        return this.Employees.length;
    }
    getTotalMaleEmployeesCount(): number {
        return this.Employees.filter(e => e.Gender.toLowerCase() === "male").length;
    }
    getTotalFemaleEmployeesCount(): number {
        return this.Employees.filter(e => e.Gender.toLowerCase() === "female").length;
    }
}