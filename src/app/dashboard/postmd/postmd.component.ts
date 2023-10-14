import { Component } from '@angular/core';
import { AjpostRequest } from '../../classe/ajpost-request';
import { Ajpost } from '../../service/ajpost';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Modifpostrequest } from 'src/app/classe/modifpostrequest';
import { ModifpostserviceService } from 'src/app/service/modifpostservice.service';
import { GetMedecinService } from 'src/app/service/get-medecin.service';


@Component({
  selector: 'app-postmd',
  templateUrl: './postmd.component.html',
  styleUrls: ['./postmd.component.css']
})
export class PostmdComponent {
titre: string='robert';
contenu: string='blablablablablablablablablabla';
source: string='manu';
ajpost : AjpostRequest = new AjpostRequest();
modpost : Modifpostrequest = new Modifpostrequest();


viewPostModel : any[]=[];
constructor(private ajpostService : Ajpost, private modifpostservice : ModifpostserviceService, private route: Router, private medecin: GetMedecinService){}  


ngOnInit(): void {
  this.viewPost();
}
errorMessage:string = "";
successMessage:string = "";

OnAjpost(){

  console.log(this.ajpost);
  this.medecin.Trouvemedecin().subscribe((d:number)=>{
          
    console.log(" DATA  ",d);
    this.ajpostService.Ajoutpost(this.ajpost,d)
    .pipe(catchError((error) => {
      console.log('testing error  CODDEEE', error.status)
      if(error.status>400){
        this.errorMessage = "une erreur c'est produite veuillez reprendre svp"
        this.successMessage=''
      //  console.log('erreur email ou mot de passe',res.statusCodeValue )
      }
       return throwError(() => error);
     }) 
   )
    .subscribe((res: any) => {
      console.log('laaaaaaa',res);

      if(res.statusCodeValue>400){
        this.errorMessage = res.body
        this.successMessage=''
        console.log("une erruer c'est produite veuillez reprendre",res.statusCodeValue )
      }
      else if(res.statusCodeValue>=200 &&  res.statusCodeValue<=300){
       this. errorMessage = '';   
        this.successMessage ="ajout effextué avec succes";
        console.log('ajout ok',res.statusCodeValue)
        // this.router.navigate(['/dashboard /forum'])
      }
   });
    //window.localStorage.setItem("id_medec",d)
    console.log(" IDE  ",d);
  })
 
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

viewPost(){
this.ajpostService.getListPost(2).subscribe((res : any ) =>{
    this.viewPostModel =res;
})
}
}
