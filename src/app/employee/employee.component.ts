import { Component } from "@angular/core";

@Component({
    selector:'my-employee',
    templateUrl:'app/employee/employee.component.html',
    styleUrls:['app/employee/employee.component.css']
})
export class EmployeeComponent{
    firstName:string="Chirag";
    lastName:string="Parmar";
    age:number=23;
    gender:string="Male";
   public  isDisabled:boolean=false;
    toggleButton(){
        debugger;
        if(this.isDisabled==true){
   this.isDisabled=false;
   console.log(this.isDisabled)
        }
        if(this.isDisabled==false){
            this.isDisabled=true;
            console.log(this.isDisabled)
        }
    }
}