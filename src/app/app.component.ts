import { Component, SystemJsNgModuleLoader } from "@angular/core";

@Component({
    selector: 'my-app',
    templateUrl:'app/app.component.html',
    styleUrls:['app/app.component.css']
})


export class AppComponent {
    title: string = "Angular Tutorial";
    CurrentYear = new Date().getFullYear();
}