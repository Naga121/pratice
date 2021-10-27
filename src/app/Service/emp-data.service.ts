import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

  public url="  http://localhost:3000/Employee"
  

  constructor(private http:HttpClient) { }

  httpOptions ={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
    }),
  }
  postData(obj:any):Observable<any>{
    return this.http.post(this.url,obj,this.httpOptions)
  }

  
}
