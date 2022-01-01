import { Component } from "@angular/core";

@Component({
    selector:'event-binding',
    templateUrl:'app/eventBinding/eventbinding.component.html',
    styleUrls:['app/eventBinding//eventbinding.component.html']
})
export class eventbindingComponent{
    public ShowDetails:Boolean=true;
    onClick():void{
        alert('Hi');
        console.log('Button is clicked!!')
    }
    toggleDetails():void{
        this.ShowDetails=!this.ShowDetails;
        console.log(this.ShowDetails);
    }
}