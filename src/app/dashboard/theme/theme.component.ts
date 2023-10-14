import { Component } from '@angular/core';
import { Soustmrequest } from 'src/app/classe/soustmrequest';
import { Themerequest } from 'src/app/classe/themerequest';
import { SoustmserviceService } from 'src/app/service/soustmservice.service';
import { ThemeserviceService } from 'src/app/service/themeservice.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
  ajsouthm = new Soustmrequest();
  ajthm = new Themerequest();
  modsouthm = new Soustmrequest();
  modthm = new Themerequest();
  constructor(private soustmserviceService : SoustmserviceService,private themeserviceService : ThemeserviceService){}  
  
  Onajthm(){
  
    console.log(this.ajthm);
    this.themeserviceService.Creethm(this.ajthm).subscribe((res: any) => {
       console.log(res);
      // window.localStorage.setItem("token");
      // console.log("ajout post effectuee avec succes " + res.token+ " Et le role est ")
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
}
