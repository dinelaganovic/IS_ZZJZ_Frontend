import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserstoreService } from 'src/app/services/userstore.service';

@Component({
  selector: 'app-healthcards',
  templateUrl: './healthcards.component.html',
  styleUrls: ['./healthcards.component.css']
})
export class HealthcardsComponent implements OnInit{
  public cardsinfo: any=[];
  public userinfo:any=[];
constructor(private api: ApiService, private auth: AuthService, private store:UserstoreService ){
}
ngOnInit(): void {
  this.store.getUserInfoFromStore()
  .subscribe(val =>{
   let infU:[] =this.auth.getArrayUFromToken();
   this.userinfo= infU;
  })
  this.api.getCardsInfo(this.userinfo[0])
  .subscribe(res=>
    {
      this.cardsinfo=res;
    })
 
}
}
