import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserstoreService {
  private firstName= new BehaviorSubject<string>("");
  private lastName= new BehaviorSubject<string>("");
  constructor() { }
  public getfirstNameFromStore(){
    return this.firstName.asObservable();
  }
  public setfirstName(name:string){
    this.firstName.next(name);
  }
  public getlastNameFromStore(){
    return this.lastName.asObservable();
  }
  public setlastName(name:string){
    this.lastName.next(name);
  }
}

