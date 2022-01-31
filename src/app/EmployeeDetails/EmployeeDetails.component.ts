import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { error } from "console";
import { employeeList } from "../ngFor/employeeList.service";
import { IEmployee } from "../ngFor/Iemployee";

@Component({
    selector: 'emp-details',
    templateUrl: 'app/EmployeeDetails/EmployeeDetails.component.html',
    styleUrls: ['app/EmployeeDetails/EmployeeDetails.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
    employee: IEmployee;
    statusMessage: string;
    constructor(private _employeeService: employeeList, private _activatedRoute: ActivatedRoute) { }
    ngOnInit() {
        let empId: Number = this._activatedRoute.snapshot.params['Id'];
        this._employeeService.getEmployeebyCode(empId).subscribe(
            (employeeData => {
                if (employeeData == null) { this.statusMessage = "This id "+empId+" Doesn't Exist!!";}
                this.employee = employeeData
            }),
            (error) => {
                this.statusMessage = "Service Not available API is Offline!!";
            }

        )
    }
}