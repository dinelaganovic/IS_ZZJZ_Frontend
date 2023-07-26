import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-verificationinstr',
  templateUrl: './verificationinstr.component.html',
  styleUrls: ['./verificationinstr.component.css']
})
export class VerificationinstrComponent implements OnInit {
  
  public requests: any=[];
  constructor( private api: ApiService){}
  ngOnInit(): void {
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
