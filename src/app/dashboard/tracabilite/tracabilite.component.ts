import { Component, OnInit } from '@angular/core';
import { Utilisateurs } from 'src/app/classe/utilisateurs';
import { TracabiliteService } from 'src/app/service/tracabilite.service';

@Component({
  selector: 'app-tracabilite',
  templateUrl: './tracabilite.component.html',
  styleUrls: ['./tracabilite.component.css']
})
export class TracabiliteComponent implements OnInit {
  jeunes: Utilisateurs[]=[];
  ngOnInit(): void {
     this.onListJeune()
  }
constructor(private tracabiliteService: TracabiliteService){}

 onListJeune():void{
   this.tracabiliteService.getJeunesList().subscribe((data)=>{
     this.jeunes = data ;
    console.log(" LES JEUNES SONT  : ",this.jeunes);
  });
}
}
