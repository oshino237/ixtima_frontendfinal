import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { AjpostRequest } from "../classe/ajpost-request";
import { GetMedecinService } from "./get-medecin.service";

@Injectable({
    providedIn: 'root'
  })
export class Ajpost {
    constructor(private http: HttpClient, private medecin: GetMedecinService) { }
    id !: number;
    Ajoutpost(ajpostRequest : AjpostRequest) {
      const token = window.localStorage.getItem("token")
      
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
            Authorization: "Bearer "+token,
          }),
        }
        this.medecin.Trouvemedecin().subscribe(data=>{
          this.id = data;
        })
        console.log(" LE ID EST  ",this.id);
        console.log("ajout post ok ",ajpostRequest," L'IDENTIFIANT EST  ",this.id );
        return this.http.post('http://localhost:8080/post/add/'+this.id, ajpostRequest, httpOptions).pipe();
      }
    }

