import { Component } from '@angular/core';
import { AjpostRequest } from '../../classe/ajpost-request';
import { Ajpost } from '../../service/ajpost';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';
import { Modifpostrequest } from 'src/app/classe/modifpostrequest';
import { ModifpostserviceService } from 'src/app/service/modifpostservice.service';


@Component({
  selector: 'app-postmd',
  templateUrl: './postmd.component.html',
  styleUrls: ['./postmd.component.css']
})
export class PostmdComponent {
ajpost : AjpostRequest = new AjpostRequest();
modpost : Modifpostrequest = new Modifpostrequest();
constructor(private ajpostService : Ajpost, private modifpostservice : ModifpostserviceService, private route: Router){}  

OnAjpost(){

  console.log(this.ajpost);
  this.ajpostService.Ajoutpost(this.ajpost).subscribe((res: any) => {
     console.log(res);
    // window.localStorage.setItem("token");
    // console.log("ajout post effectuee avec succes " + res.token+ " Et le role est ")
  });
}
Onmodifpost(){
  console.log(this.modpost);
  this.modifpostservice.Modifpost(this.modpost).subscribe((res: any) => {
     console.log(res);
     this.route.navigate(['/dashboard/postmd'])
    

    // window.localStorage.setItem("token");
    // console.log("ajout post effectuee avec succes " + res.token+ " Et le role est ")
  });
}
}
