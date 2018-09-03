import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';  
//import 'rxjs/add/operator/toPromise';
//import { toPromise } from 'rxjs/operators/toPromise';
// import { toPromise } from 'rxjs/operators';
import {Headers, Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 GetCemetery(arg0: any): any {
    throw new Error("Method not implemented.");
  }	

  private LoginUrl='http://localhost/australian_cemetery_demo/api/user/access_token';
  
  //private newurl = 'http://tocabotclientgatewayv6.azurewebsites.net/api/1';
  
  private host = window.location.hostname;
  private headers = new Headers({'Content-Type': 'application/json'});

  // private LoginUrl= this.API_ENDPOINT + `user/access_token`; 

  constructor(private http:Http) { }

   registerUser(user){
     

     // return this.http.post(this.LoginUrl, JSON.stringify(), {headers: this.headers })
     // .toPromise()
     // .then(res => res.json() )
     // .catch(this.handleError)
    }
}
