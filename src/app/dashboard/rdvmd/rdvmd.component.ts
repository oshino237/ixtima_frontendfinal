import { Component } from '@angular/core';
import { Disponibiliterequest } from 'src/app/classe/disponibiliterequest';
import { DisponibiliteserviveService } from 'src/app/service/disponibiliteservive.service';

@Component({
  selector: 'app-rdvmd',
  templateUrl: './rdvmd.component.html',
  styleUrls: ['./rdvmd.component.css']
})
export class RdvmdComponent {
  ajdis= new Disponibiliterequest();
  moddis = new Disponibiliterequest();
  constructor(private disponibiliteserviveService : DisponibiliteserviveService){}  
  
  Onajdisp(){
  
    console.log(this.ajdis);
    this.disponibiliteserviveService.Ajoutdispo(this.ajdis).subscribe((res: any) => {
       console.log(res);
      // window.localStorage.setItem("token");
      // console.log("ajout post effectuee avec succes " + res.token+ " Et le role est ")
    });
  }
  Onmoddisp(){
  
    console.log(this.moddis);
    this.disponibiliteserviveService.Modifdispo(this.moddis).subscribe((res: any) => {
       console.log(res);
      // window.localStorage.setItem("token");
      // console.log("ajout post effectuee avec succes " + res.token+ " Et le role est ")
    });
  }
  viewdispoModel : any[]=[];
  
  
  ngOnInit(): void {
    this.viewdispo();
  }

  viewdispo(){
    this.disponibiliteserviveService.getListdispo(2).subscribe((res : any ) =>{
        this.viewdispoModel = res;
    })
    }
}
