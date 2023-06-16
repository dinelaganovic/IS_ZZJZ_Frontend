import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class hceApiService {
  readonly hceAPIUrl="https://localhost:7059/api";

  constructor(private http:HttpClient) { 

  }
  getHCEList():Observable<any[]> {

    return this.http.get<any>(this.hceAPIUrl+ '/HCE');
  }

  addHCE(data:any) {
    return this.http.post(this.hceAPIUrl + '/HCE', data);
  }

  updateHCE(id:number|string, data:any) {
    return this.http.put(this.hceAPIUrl + `/HCE/${id}`, data);
  }

  deleteHCE(id:number|string) {
    return this.http.delete(this.hceAPIUrl + `/HCE/${id}`);
  }
}
