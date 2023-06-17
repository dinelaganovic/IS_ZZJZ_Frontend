import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserstoreService {
  private fullName$= new BehaviorSubject<string>("");
  constructor() { }
  public getfullNameFromStore(){
    return this.fullName$.asObservable();
  }
  public setfullNameFromStore(name:string){
    this.fullName$.next(name);
  }
}

