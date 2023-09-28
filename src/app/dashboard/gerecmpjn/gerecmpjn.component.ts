import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Gcmptjnrequest } from 'src/app/classe/gcmptjnrequest';
import { Gcmptmedrequest } from 'src/app/classe/gcmptmedrequest';
import { GcmptjnserviceService } from 'src/app/service/gcmptjnservice.service';

@Component({
  selector: 'app-gerecmpjn',
  templateUrl: './gerecmpjn.component.html',
  styleUrls: ['./gerecmpjn.component.css']
})
export class GerecmpjnComponent {

  modifpro = new Gcmptjnrequest();
constructor(private gcmptjnserviceService : GcmptjnserviceService){}  

Onmodifprofiljn(){

  console.log(this.modifpro);
  this.gcmptjnserviceService.Modifprofiljn(this.modifpro).subscribe((res: any) => {
     console.log(res);
    // window.localStorage.setItem("token");
    // console.log("ajout post effectuee avec succes " + res.token+ " Et le role est ")
  });
}
}
