import { Component } from "@angular/core";
import { time } from "console";
import { stringify } from "querystring";

@Component({
    selector:'my-employee',
    templateUrl:'app/employee/employee.component.html',
    styleUrls:['app/employee/employee.component.css']
})
export class EmployeeComponent{
    firstName:string="Chirag";
    lastName:string="Parmar";
    age:number=23;
    gender: string = "Male";   
    colSpan: number = 2;
    classTobeApply:string='boldClass colorClass';
    isBold:boolean=false;
    applyColorClass:boolean=true;
    applyBoldClass:boolean=true;
    applyItalicclass:boolean=true;
    fontSize:number=25;
    color:string='green';
    fontStyle:string='italic';
    fontWeight:string='bold';
    isEnable:boolean=true;
    enableDisableText:string='';
   public  isDisabled:boolean=false;
   showGender:boolean=false;
   showAge:boolean=false;
   showButtonText:string='show';
   constructor(){
       this.isEnable=true;
       this.enableDisableText="enable"
       console.log(this.enableDisableText);      
   }
   showHide():void{
    
        this.showAge=!this.showAge;
   
     this.showGender=!this.showGender;
     if(this.showAge && this.showGender)
     {
         this.showButtonText="Hide"         
     }
     else
     {
         this.showButtonText="Show"
     }
 
   }
   addClasses(){
       let classes ={
           boldClass:this.applyBoldClass,
           italicClass:this.applyItalicclass
       };
    return classes;    
   }
   addStyles(){
       let styles={
           'font-size.px':this.fontSize,
           'color':this.color,
           'font-style':this.fontStyle,
           'font-weight':this.fontWeight
       };
       return styles;
   }
   enableDisable(){
       console.log(this.enableDisableText);
    if(this.isEnable)
    this.enableDisableText="Enable"
    else
    this.enableDisableText="Disabled"
       this.isEnable=!this.isEnable;
       console.log(this.isEnable);             
   }

}