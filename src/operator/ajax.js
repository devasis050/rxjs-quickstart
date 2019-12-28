import {Observable} from "rxjs";
import {ajax} from "rxjs/ajax";
import {map} from "rxjs/operators";


export default function ajaxSubscriber() {
    const observable = ajax(`https://api.github.com/users?per_page=5`).pipe(map(response=>{
        console.log("response", response);
        return response;
    }))
    observable.subscribe((data) => console.log(data.status) )
};