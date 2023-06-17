import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserstoreService } from 'src/app/services/userstore.service';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {
  public fullName:string="";
  @Input() collapsed = false;
  @Input() screenWidth = 0;
constructor(private store: UserstoreService, private auth: AuthService){

}
ngOnInit(): void {
  this.store.getfullNameFromStore()
  .subscribe(val=>{
    let fullNameFromToken= this.auth.getfullNameFromToken();
    this.fullName=val|| fullNameFromToken;
  })
 
}
  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      //da navbar prelazi preko stranice
      styleClass = 'adminpan-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'adminpan-md-screen'
    }
    return styleClass;
  }
}
