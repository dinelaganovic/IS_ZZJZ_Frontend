import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userrequests',
  templateUrl: './userrequests.component.html',
  styleUrls: ['./userrequests.component.css']
})
export class UserrequestsComponent implements OnInit {
public users: any=[];
constructor( private api: ApiService){}
ngOnInit(): void {
  this.api.getUsers()
  .subscribe(res=>
    {
      this.users=res;
    })
}
}
