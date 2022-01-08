import { Injectable } from "@angular/core";
import { IEmployee } from "./Iemployee";
import { Http , Response} from "@angular/http"
import { Observable } from "rxjs/observable"
import "rxjs/add/operator/map"


@Injectable()
export class employeeList {
    constructor(private _http:Http) {

    }
    getEmployeeList(): Observable<IEmployee[]> {
        return this._http.get("http://localhost:63804/api/employees")
            .map((response: Response) => <IEmployee[]>response.json());
        //return [
        //    { id: 1, name: 'Chirag', city: 'vadodara', gender: 'male' },
        //    { id: 2, name: 'Chix', city: 'Anand', gender: 'male' },
        //    { id: 3, name: 'Chku', city: 'Vidhyanagar', gender: 'male' },
        //    { id: 4, name: 'Dipu', city: 'San pedro sula', gender: 'female' },
        //    { id: 5, name: 'Cindrela', city: 'Las Vegas', gender: 'female' },
        //    { id: 6, name: 'Susane', city: 'Baja California', gender: 'female' },
        //    { id: 7, name: 'Chikky', city: 'Laos', gender: 'male' },
        //];
    }
}