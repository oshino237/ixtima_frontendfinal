import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gerecmpad',
  templateUrl: './gerecmpad.component.html',
  styleUrls: ['./gerecmpad.component.css']
})
export class GerecmpadComponent implements OnInit{
  constructor(private route:Router){}
  ngOnInit(): void {
    const role = window.localStorage.getItem("role");
    if(role != "ADMIN"){
     alert("vous n'etes pas autorisé à consulter cette page");
     window.localStorage.clear();
     this.route.navigate(['/connexion']);
    }
   }
}
