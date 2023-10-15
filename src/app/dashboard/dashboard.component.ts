import { Component } from '@angular/core';
import { TokenService } from '../service/token.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  //Todo get window session role
  // Todo store in var
  
// test:string='Fono'
// role:string='Jeune'
// roleJeune:string='Jeune'
// roleMed:string='Med'
constructor(private deconnec : TokenService, private route:Router){}
 role = window.localStorage.getItem("role")
nom = window.localStorage.getItem("pseudo")

OnLogout(): any{
  this.deconnec.log_out();
  this.route.navigate(['/accueil']);  
}

}
