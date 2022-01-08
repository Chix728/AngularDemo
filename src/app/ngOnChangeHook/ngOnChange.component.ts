import { Component, Input,OnChanges,SimpleChanges } from "@angular/core";

@Component({
    selector: 'on-change',
    template: `
    <h1>This is ngOnChange Component</h1>
    Enter text:<input type='text' [(ngModel)]='simpleChange'>
    You entered:{{simpleChange}}
    
    `
})
export class ngOnChangeComponent  implements OnChanges{
            current:string;
            previous:string;
        ngOnChanges(changes: SimpleChanges): void {
            for(let propertyName in changes){
                let change=changes[propertyName];
                let current = JSON.stringify(change.currentValue);
                let prev = JSON.stringify(change.previousValue);
                this.current=current;
                this.previous=prev;
            }
        }
        @Input() 
        simpleChange:string;
        
}