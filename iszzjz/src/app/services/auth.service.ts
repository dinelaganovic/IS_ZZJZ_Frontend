import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string="https://localhost:7059/api/User/";
  constructor(private http: HttpClient) { }
  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj)
  }
  logina(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticatea`, loginObj)
  }
  loginadmin(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticateadmin`, loginObj)
  }
  signUp(userObj: any){
    return this.http.post<any>(`${this.baseUrl}register`, userObj)
  }

  storeToken(tokenValue: string){
    localStorage.setItem('token',tokenValue)
  }
  getToken(){
    return localStorage.getItem('token');
  }
  isLoggedIn():boolean{
    return  !!localStorage.getItem('token')
  }

}
