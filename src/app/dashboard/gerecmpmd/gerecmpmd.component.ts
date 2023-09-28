import { Component } from '@angular/core';
import { Gcmptmedrequest } from 'src/app/classe/gcmptmedrequest';
import { GcmptmedserviceService } from 'src/app/service/gcmptmedservice.service';

@Component({
  selector: 'app-gerecmpmd',
  templateUrl: './gerecmpmd.component.html',
  styleUrls: ['./gerecmpmd.component.css']
})
export class GerecmpmdComponent {
  
  modifpro = new Gcmptmedrequest();
constructor(private gcmptmedserviceService : GcmptmedserviceService){}  

Onmodifprofil(){

  console.log(this.modifpro);
  this.gcmptmedserviceService.Modifprofil(this.modifpro).subscribe((res: any) => {
     console.log(res);
    // window.localStorage.setItem("token");
    // console.log("ajout post effectuee avec succes " + res.token+ " Et le role est ")
  });
}
}
