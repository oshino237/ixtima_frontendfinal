import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { AjpostRequest } from "../classe/ajpost-request";
import { GetMedecinService } from "./get-medecin.service";

@Injectable({
    providedIn: 'root'
  })
export class Ajpost {
    constructor(private http: HttpClient, private medecin: GetMedecinService) { }
    private ide !:number 
    Ajoutpost(ajpostRequest : AjpostRequest, d: number) {
      const token = window.localStorage.getItem("token")
      
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
            Authorization: "Bearer "+token,
          }),
        }
        // this.medecin.Trouvemedecin().subscribe((d:number)=>{
          
        //   console.log(" DATA  ",d);
        //   this.ide = d
        //   //window.localStorage.setItem("id_medec",d)
        //   console.log(" IDE  ",this.ide);
        // })
        
        console.log("L IDENTIFIANT EST  ", window.localStorage.getItem("id_medec"));
        return this.http.post('http://localhost:8080/post/add/'+d, ajpostRequest, httpOptions).pipe();
      }
    }

