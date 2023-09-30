import { Component } from '@angular/core';

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
constructor(){}
role = window.localStorage.getItem("role")
nom = window.localStorage.getItem("nom")



 
}
