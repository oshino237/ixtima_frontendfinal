import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit {
  constructor(private route:Router){}

  ngOnInit(): void {
    const role = window.localStorage.getItem("role");
    const role1 = window.localStorage.getItem("role");
    const role2 = window.localStorage.getItem("role");
    if(role != "MEDECIN" || role1 !="JEUNE" || role2 != "ADMIN"){
     alert("vous n'etes pas autorisé à consulter cette page");
     window.localStorage.clear();
     this.route.navigate(['/connexion']);
    }
   }
}
