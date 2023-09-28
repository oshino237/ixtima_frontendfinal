import { Component } from '@angular/core';
import { Furomrequest } from 'src/app/classe/furomrequest';
import { FuromserviceService } from 'src/app/service/furomservice.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
 
export class ForumComponent {
  messg : Furomrequest = new Furomrequest();
  constructor(private forumservice : FuromserviceService){} 

  OnMessage(){

    console.log(this.messg);
    this.forumservice.Forummess(this.messg).subscribe((res: any) => {
       console.log(res);
      // window.localStorage.setItem("token");
      // console.log("ajout post effectuee avec succes " + res.token+ " Et le role est ")
    });
  }
}
