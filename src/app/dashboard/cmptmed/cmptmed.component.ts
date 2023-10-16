import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistRequest } from 'src/app/classe/regist-request';
import { TracabiliteService } from 'src/app/service/tracabilite.service';

@Component({
  selector: 'app-cmptmed',
  templateUrl: './cmptmed.component.html',
  styleUrls: ['./cmptmed.component.css']
})
export class CmptmedComponent implements OnInit{
  constructor(private tracabiliteService: TracabiliteService,private route:Router){}

  jeunes: RegistRequest[]=[];
  viewmedModel : RegistRequest[]=[];
  ngOnInit(): void {
    this.viewmed();
    const role = window.localStorage.getItem("role");
    if(role != "ADMIN"){
     alert("vous n'etes pas autorisé à consulter cette page");
     window.localStorage.clear();
     this.route.navigate(['/connexion']);
    }
   }
   viewmed(){
    this.tracabiliteService.getListmed().subscribe((data)=>{
      this.jeunes = data ;
     console.log(" LES JEUNES SONT  : ",this.jeunes);
   });
    }

}
