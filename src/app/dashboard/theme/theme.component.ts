import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Soustmrequest } from 'src/app/classe/soustmrequest';
import { Themerequest } from 'src/app/classe/themerequest';
import { SoustmserviceService } from 'src/app/service/soustmservice.service';
import { ThemeserviceService } from 'src/app/service/themeservice.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit{
  ajsouthm = new Soustmrequest();
  ajthm = new Themerequest();
  modsouthm = new Soustmrequest();
  modthm = new Themerequest();
  constructor(private soustmserviceService : SoustmserviceService,private themeserviceService : ThemeserviceService,private route:Router){}  
      OnaddTheme(theme:Themerequest){
      this.themeserviceService.Creethm(theme).subscribe(data=>{

        console.log("Le theme enregister est  ",theme)
      })
    }
  Onajthm(){
  
    console.log(this.ajthm);
    this.themeserviceService.Creethm(this.ajthm).subscribe((res: any) => {
       console.log(res);
       this.viewtheme();
    });
  }
  Onajsouthm(){
  
    console.log(this.ajsouthm);
    this.soustmserviceService.Creesouthm(this.ajsouthm).subscribe((res: any) => {
       console.log(res);
      // window.localStorage.setItem("token");
      // console.log("ajout post effectuee avec succes " + res.token+ " Et le role est ")
    });
  }
  Onmodsouthm(){
  
    console.log(this.modsouthm);
    this.soustmserviceService.Modifsouthm(this.modsouthm).subscribe((res: any) => {
       console.log(res);
      // window.localStorage.setItem("token");
      // console.log("ajout post effectuee avec succes " + res.token+ " Et le role est ")
    });
  }
  Onmodthm(){
  
    console.log(this.modthm);
    this.themeserviceService.Modifthm(this.modthm).subscribe((res: any) => {
       console.log(res);
      // window.localStorage.setItem("token");
      // console.log("ajout post effectuee avec succes " + res.token+ " Et le role est ")
    });
  }
  viewthemeModel : Themerequest[]=[];
  viewsouthemeModel : Soustmrequest[]=[];
  
  ngOnInit(): void {
    this.viewtheme();
    this.viewsoutheme();
   const role = window.localStorage.getItem("role");
   if(role != "ADMIN"){
    alert("vous n'etes pas autorisé à consulter cette page");
    window.localStorage.clear();
    this.route.navigate(['/connexion']);
   }
  }

  viewtheme(){
    this.themeserviceService.getListTheme(2).subscribe((res : any ) =>{
        this.viewthemeModel = res;
    })
    }
  viewsoutheme(){
    this.soustmserviceService.getListsouTheme(2).subscribe((res : any ) =>{
        this.viewsouthemeModel = res;
    })
    }

    deletethm(id:any){
    
      this.themeserviceService.deletethme(id).subscribe(d =>{
  
        console.log("LA REPONSE D EST ",d);
        this.viewtheme();
       })
    }
}
