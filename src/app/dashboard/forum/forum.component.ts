import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Furomrequest } from 'src/app/classe/furomrequest';
import { FuromserviceService } from 'src/app/service/furomservice.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
 
export class ForumComponent implements OnInit {
  messg : Furomrequest = new Furomrequest();
  message : any[]=[]
  constructor(private forumservice : FuromserviceService,private route:Router){} 
  ngOnInit(): void {
    const role = window.localStorage.getItem("role");
    const role1 = window.localStorage.getItem("role");
    const role2 = window.localStorage.getItem("role");
    if(role != "MEDECIN" || role1 !="JEUNE" || role2 != "ADMIN"){
     alert("vous n'etes pas autorisé à consulter cette page");
     window.localStorage.clear();
     this.route.navigate(['/connexion']);
    }
   }
  OnMessage(){

    console.log(this.messg);
    this.forumservice.Forummess(this.messg).subscribe((res: any) => {
       console.log(res);
      // window.localStorage.setItem("token");
      // console.log("ajout post effectuee avec succes " + res.token+ " Et le role est ")
    });
  }
}
