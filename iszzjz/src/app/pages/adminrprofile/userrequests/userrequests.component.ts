import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userrequests',
  templateUrl: './userrequests.component.html',
  styleUrls: ['./userrequests.component.css']
})
export class UserrequestsComponent implements OnInit {
  
public requests: any=[];
usersList$!:Observable<any[]>;

constructor( private api: ApiService){}
ngOnInit(): void {
  this.usersList$= this.api.getUserList();

  this.api.getReguests()
  .subscribe(res=>
    {
      this.requests=res;
    })
}
public createImgPath = (serverPath: string) => { 
  return `https://localhost:7059/${serverPath}`; 
}
}
