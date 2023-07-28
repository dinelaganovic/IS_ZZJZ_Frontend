import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-verhc',
  templateUrl: './verhc.component.html',
  styleUrls: ['./verhc.component.css']
})
export class VerhcComponent {

  requests$!:Observable<any[]>;
  usersList$!:Observable<any[]>;

constructor( private api: ApiService){}

  @Input() requests:any;
  @Input() healthcards:any;
  id: number = 0;
  id_user:number=0;
  date_verification_hc:string = "";
  date_expiration_hc:string = "";

  ngOnInit(): void {
    this.id_user = this.requests.userid;
    this.requests$! = this.api.getReguests();
  }

  addNCards() {
    var healthcards = {
      date_verification_hc:this.date_verification_hc,
      date_expiration_hc:this.date_expiration_hc,
      id_user:this.id_user
    }

    this.api.postNCard(healthcards).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })
  }

 /* updateHCEmployee() {
    var hcemployee = {
      id_hce:this.id_hce,
      name_hce:this.name_hce,
      city_hce: this.city_hce,
     flname_doctor:this.flname_doctor
    }
    var id_hce:number = this.id_hce;
    this.service.updateHCE(id_hce,hcemployee).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })
  }*/
}
