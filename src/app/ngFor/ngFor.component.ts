import { Component } from "@angular/core";
import{IEmployee} from '../ngFor/Iemployee';
import{employeeCountComponent}from '../employeeCount/employeeCount.component'
@Component({
    selector:'ngFor',
    templateUrl:'app/ngFor/ngFor.component.html',
    styleUrls:['app/ngFor/ngFor.component.css']
})
export class ngForComponent{
    /**
     *
     */
     selectedEmployeeCountRadioButton:string="all";
     Employees:IEmployee[];
    constructor() {
       this.Employees=[
        {id:1,name:'Chirag',city:'vadodara', gender:'male'},
        {id:2,name:'Chix',city:'Anand', gender:'male'},
        {id:3,name:'Chku',city:'Vidhyanagar', gender:'male'},
        {id:4,name:'Jigo',city:'surat', gender:'male'},
        {id:5,name:'Girl',city:'Las Vegas', gender:'female'},
        {id:6,name:'Nagin',city:'Gana', gender:'female'},
    ]        
    }
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue:string):void{
        this.selectedEmployeeCountRadioButton=selectedRadioButtonValue;
    }
    
    getEmployees():void{
        this.Employees=[
            {id:1,name:'Chirag',city:'vadodara', gender:'male'},
            {id:2,name:'Chix',city:'Anand', gender:'male'},
            {id:3,name:'Chku',city:'Vidhyanagar', gender:'male'},
            {id:4,name:'Jigo',city:'surat', gender:'female'},
            {id:5,name:'Girl',city:'Las Vegas', gender:'female'},
            {id:6,name:'Nagin',city:'Gana', gender:'female'},
            {id:7,name:'Vandro',city:'Gana', gender:'male'},
        ]
    }
    trackByEmployeeCode(index:number,employee:any){
        return employee.id;
    }
    getTotalEmployeesCount():number{
        return this.Employees.length;
    }
    getTotalMaleEmployeesCount():number{
        return this.Employees.filter(e=>e.gender.toLowerCase()==="male").length;
    }
    getTotalFemaleEmployeesCount():number{
        return this.Employees.filter(e=>e.gender.toLowerCase()==="female").length;
    }
}