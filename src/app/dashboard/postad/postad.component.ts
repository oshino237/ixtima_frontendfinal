import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ajpost } from 'src/app/service/ajpost';

@Component({
  selector: 'app-postad',
  templateUrl: './postad.component.html',
  styleUrls: ['./postad.component.css']
})
export class PostadComponent implements OnInit {
  viewPostModel : any[]=[];
  constructor(private ajpostService : Ajpost, private route:Router){}  
  
ngOnInit(): void {
  this.viewPost();
  const role = window.localStorage.getItem("role");
  if(role != "ADMIN"){
   alert("vous n'etes pas autorisé à consulter cette page");
   window.localStorage.clear();
   this.route.navigate(['/connexion']);
  }
 }

  viewPost(){
    this.ajpostService.getListPost(2).subscribe((res : any ) =>{
        this.viewPostModel = res;
    })
    }
  deletePost(id:any){
    
    this.ajpostService.deletepostAd(id).subscribe(d =>{

      console.log("LA REPONSE D EST ",d);
      this.viewPost();
     })
  }
}
