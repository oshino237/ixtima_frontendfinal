import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, withDebugTracing } from '@angular/router';
import { Gcmptjnrequest } from 'src/app/classe/gcmptjnrequest';
import { Gcmptmedrequest } from 'src/app/classe/gcmptmedrequest';
import { GcmptjnserviceService } from 'src/app/service/gcmptjnservice.service';

@Component({
  selector: 'app-gerecmpjn',
  templateUrl: './gerecmpjn.component.html',
  styleUrls: ['./gerecmpjn.component.css']
})
export class GerecmpjnComponent implements OnInit{

  modifpro = new Gcmptjnrequest();
constructor(private gcmptjnserviceService : GcmptjnserviceService, private route:Router){}  
  ngOnInit(): void {
   const role = window.localStorage.getItem("role");
   if(role != "JEUNE"){
    alert("vous n'etes pas autorisé à consulter cette page");
    window.localStorage.clear();
    this.route.navigate(['/connexion']);
   }
  }

Onmodifprofiljn(){

  console.log(this.modifpro);
  this.gcmptjnserviceService.Modifprofiljn(this.modifpro).subscribe((res: any) => {
     console.log(res);
    // window.localStorage.setItem("token");
    // console.log("ajout post effectuee avec succes " + res.token+ " Et le role est ")
  });
}
}
