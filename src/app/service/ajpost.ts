import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { AjpostRequest } from "../classe/ajpost-request";
import { GetMedecinService } from "./get-medecin.service";
import { Observable } from "rxjs";

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
        return this.http.post('http://localhost:8080/post/add/'+d, ajpostRequest, httpOptions);
      }
      getListPost(id:number):Observable<AjpostRequest[]>{
        const token = window.localStorage.getItem("token")
      
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
            Authorization: "Bearer "+token,
          }),
        }
        return this.http.get<AjpostRequest[]>('http://localhost:8080/post/getAll',httpOptions);
      }

      deletepost(p:number,d:number){
        const token = window.localStorage.getItem("token")
      
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
            Authorization: "Bearer "+token,
          }),
        }
        if(d==p){
          return null;
        }else{
          console.log('impossible de supprimer');
          return this.http.delete(`http://localhost:8080/post/delete/${p}`,httpOptions)
        }
      }

      deletepostAd(p:number){
        const token = window.localStorage.getItem("token")
      
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
            Authorization: "Bearer "+token,
          }),
        }
        
          console.log('impossible de supprimer');
          return this.http.delete(`http://localhost:8080/post/delete/${p}`,httpOptions)
        
      }
      
    }

