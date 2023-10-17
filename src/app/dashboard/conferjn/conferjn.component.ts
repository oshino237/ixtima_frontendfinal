import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conferjn',
  templateUrl: './conferjn.component.html',
  styleUrls: ['./conferjn.component.css']
})
export class ConferjnComponent implements OnInit {
  constructor(private route:Router){}
  ngOnInit(): void {
    const role = window.localStorage.getItem("role");
    if(role != "JEUNE"){
     alert("vous n'etes pas autorisé à consulter cette page");
     window.localStorage.clear();
     this.route.navigate(['/connexion']);
    }
   }
}
