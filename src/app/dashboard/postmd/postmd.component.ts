import { Component, OnInit } from '@angular/core';
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
export class PostmdComponent implements OnInit{
titre: string='robert';
contenu: string='blablablablablablablablablabla';
source: string='manu';
ajpost : AjpostRequest = new AjpostRequest();
modpost : Modifpostrequest = new Modifpostrequest();


viewPostModel : any[]=[];
constructor(private ajpostService : Ajpost, private modifpostservice : ModifpostserviceService, private route: Router, private medecin: GetMedecinService){}
id_medecin!:number;  

ngOnInit(): void {
this.medecin.Trouvemedecin().subscribe(data =>{
  this.id_medecin = data;
   console.log(data)
    console.log(" ID TROUVER EST", this.id_medecin)
  })
 
   this.viewPost();
  const role = window.localStorage.getItem("role");

  if(role != "MEDECIN"){
   alert("vous n'etes pas autorisé à consulter cette page");
   window.localStorage.clear();
   this.route.navigate(['/connexion']);
  }
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
      
      this.viewPost();
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
supprimpost(id :any){
 const idm = this.id_medecin;
 this.ajpostService.deletepost(id, idm)?.subscribe(d =>{

  console.log("LA REPONSE D EST ",d);
  this.viewPost();
 })
}
viewPost(){
this.ajpostService.getListPost(2).subscribe((res : any ) =>{
    this.viewPostModel =res;
})
}
}
