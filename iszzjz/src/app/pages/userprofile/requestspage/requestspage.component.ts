import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  requestForm: FormGroup;
  rtypes = [
    { id: 1, name: "Zahtev za kreiranje zdravstvene knjižice" },
    { id: 2, name: "Zahtev za overu zdravstvene knjižice" },
    { id: 3, name: "Zahtev za overu uputa lečenja" }
  ];
constructor(private api: ApiService, private auth: AuthService, private store:UserstoreService, private fb: FormBuilder ){
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
    })

    this.requestForm = this.fb.group({
      requesttype: [null]
    });
}
submit(){
  console.log("Form Submitted")
    console.log(this.requestForm.value)
}
}
