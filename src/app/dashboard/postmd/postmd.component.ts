import { Component } from '@angular/core';
import { AjpostRequest } from '../../classe/ajpost-request';
import { Ajpost } from '../../service/ajpost';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-postmd',
  templateUrl: './postmd.component.html',
  styleUrls: ['./postmd.component.css']
})
export class PostmdComponent {
ajpost : AjpostRequest = new AjpostRequest();
constructor(private ajpostService : Ajpost, private router : Router){}  

OnAjpost(){
  // this.ajpost.date_creation_post = new Date();
  //  this.ajpost.date_creation_post = this.formatDate();
this.ajpostService.Ajoutpost(this.ajpost).pipe(
  catchError(err =>{
    throw 'error in source. Details: ' + err + " Erreur de format";
  })
).subscribe((res:any)=> {
  console.log(res);
  this.router.navigate(['/forum'])
}
)

}

}
