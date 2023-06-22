import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserstoreService } from 'src/app/services/userstore.service';

@Component({
  selector: 'app-requestspage',
  templateUrl: './requestspage.component.html',
  styleUrls: ['./requestspage.component.css']
})
export class RequestspageComponent implements OnInit{
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
  this.api.getCardsInfo(1)
  .subscribe(res=>
    {
      this.cardsinfo=res;
      console.log(this.cardsinfo);
    })
 
}
}
