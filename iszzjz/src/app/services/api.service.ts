import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string="https://localhost:7059/api/User/";
  private baseUrl1: string="https://localhost:7059/api/Cards/";
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any>(this.baseUrl);
  }
  getCardsInfo(id:number){
    return this.http.get<any[]>(this.baseUrl1+`${id}`)
  } 
}
