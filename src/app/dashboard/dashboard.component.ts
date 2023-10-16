import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private deconnec : TokenService, private route:Router){}

 ngOnInit(): void {
   const token = window.localStorage.getItem("token");
   if(token === null){
   
    window.localStorage.clear();
     alert("veuilliez vous connceter s'il vous plait");
    this.route.navigate(['/connexion']);
   }
 }
  //Todo get window session role
  // Todo store in var
  
// test:string='Fono'
// role:string='Jeune'
// roleJeune:string='Jeune'
// roleMed:string='Med'

 role = window.localStorage.getItem("role")
nom = window.localStorage.getItem("pseudo")

OnLogout(): any{
  this.deconnec.log_out();
  this.route.navigate(['/accueil']);  
}

}
