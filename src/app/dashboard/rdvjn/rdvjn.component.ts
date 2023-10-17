import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisponibiliteserviveService } from 'src/app/service/disponibiliteservive.service';

@Component({
  selector: 'app-rdvjn',
  templateUrl: './rdvjn.component.html',
  styleUrls: ['./rdvjn.component.css']
})
export class RdvjnComponent implements OnInit {
  constructor(private disponibiliteserviveService : DisponibiliteserviveService,private route:Router){}  
  viewdispoModel : any[]=[];

  ngOnInit(): void {
    this.viewdispo();
   const role = window.localStorage.getItem("role");
   if(role != "JEUNE"){
    alert("vous n'etes pas autorisé à consulter cette page");
    window.localStorage.clear();
    this.route.navigate(['/connexion']);
   }
  }
  viewdispo(){
    this.disponibiliteserviveService.getListdispo(2).subscribe((res : any ) =>{
        this.viewdispoModel = res;
    })
    }
}
