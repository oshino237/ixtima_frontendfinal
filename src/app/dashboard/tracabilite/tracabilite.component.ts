import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateurs } from 'src/app/classe/utilisateurs';
import { TracabiliteService } from 'src/app/service/tracabilite.service';

@Component({
  selector: 'app-tracabilite',
  templateUrl: './tracabilite.component.html',
  styleUrls: ['./tracabilite.component.css']
})
export class TracabiliteComponent implements OnInit {
  constructor(private tracabiliteService: TracabiliteService,private route:Router){}
  jeunes: Utilisateurs[]=[];
  ngOnInit(): void {
    this.onListJeune()
   const role = window.localStorage.getItem("role");
   if(role != "ADMIN"){
    alert("vous n'etes pas autorisé à consulter cette page");
    window.localStorage.clear();
    this.route.navigate(['/connexion']);
   }
  }
 onListJeune():void{
   this.tracabiliteService.getJeunesList().subscribe((data)=>{
     this.jeunes = data ;
    console.log(" LES JEUNES SONT  : ",this.jeunes);
  });
}
}
