import {Injectable} from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IncidentService {

  constructor(private http: Http){}

  submit(data){
       return this.http.post('',data)
                  .map(res => 
                  res.json());
    }  

  submit2(){
    return this.http.get('../assets/data/details.json')
                .map(res=>
                res.json());
  }    
}