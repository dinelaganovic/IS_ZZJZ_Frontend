import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-addhcards',
  templateUrl: './addhcards.component.html',
  styleUrls: ['./addhcards.component.css']
})
export class AddhcardsComponent {

  requests$!:Observable<any[]>;
  usersList$!:Observable<any[]>;

constructor( private api: ApiService){}

  @Input() requests:any;
  id: number = 0;
  userid:number=0;

  ngOnInit(): void {
    this.userid = this.requests.userid;

    this.requests$! = this.api.getReguests();
  }

  /*addHCEmployee() {
    var hcemployee = {
      name_hce:this.name_hce,
      city_hce: this.city_hce,
     flname_doctor:this.flname_doctor
    }

    this.service.addHCE(hcemployee).subscribe(res => {
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
      this.hceList$ = this.service.getHCEList();
    })
  }*/

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
