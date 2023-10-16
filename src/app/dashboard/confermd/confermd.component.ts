import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confermd',
  templateUrl: './confermd.component.html',
  styleUrls: ['./confermd.component.css']
})
export class ConfermdComponent implements OnInit {
  constructor(private route:Router){}
  ngOnInit(): void {
    const role = window.localStorage.getItem("role");
    if(role != "MEDECIN"){
     alert("vous n'etes pas autorisé à consulter cette page");
     window.localStorage.clear();
     this.route.navigate(['/connexion']);
    }
   }

}
