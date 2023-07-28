import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string="https://localhost:7059/api/User/";
  private baseUrl1: string="https://localhost:7059/api/Cards/";
  private baseUrl2: string="https://localhost:7059/api/Upload/";
  private baseUrl3: string="https://localhost:7059/api/Requests";
  private baseUrl4: string="https://localhost:7059/api/Cards/getall";

  readonly usersAPIUrl="https://localhost:7059/api";
  private cardsUrl1: string="https://localhost:7059/api/Cards/";

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<any>(this.baseUrl);
  }

  getUserList():Observable<any[]> {
    return this.http.get<any>(this.usersAPIUrl+ '/User/getallusers');
  }

  getCardsInfo(id:number){
    return this.http.get<any[]>(this.baseUrl1+`${id}`)
  } 

  getRTypes(){
    return this.http.get<any>(this.baseUrl2);
  }
  SaveR(userObj: any){
      return this.http.post<any>(`${this.baseUrl2}request`, userObj)
  }
  postNCard(data:any) {
    return this.http.post(this.cardsUrl1, data);
  }
  getReguests(){
    return this.http.get<any>(this.baseUrl3);
  }
  deleteReq(id:number|string) {
    return this.http.delete(this.baseUrl3 + `/${id}`);
  }
  getCards(){
    return this.http.get<any>(this.baseUrl4);
  }
  updateCards(id:number|string, data:any) {
    return this.http.put(this.cardsUrl1 + `${id}`, data);
  }
}
