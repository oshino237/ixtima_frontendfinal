import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ajpost } from 'src/app/service/ajpost';

@Component({
  selector: 'app-postjn',
  templateUrl: './postjn.component.html',
  styleUrls: ['./postjn.component.css']
})
export class PostjnComponent implements OnInit {
  viewPostModel : any[]=[];
  constructor(private ajpostService : Ajpost, private route: Router){}  

  ngOnInit(): void {
    this.viewPost();
    const role = window.localStorage.getItem("role");
    if(role != "JEUNE"){
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
}
