import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Themerequest } from '../classe/themerequest';

@Injectable({
  providedIn: 'root'
})
export class ThemeserviceService {

 
  constructor(private http: HttpClient) { }
    Creethm(themerequest : Themerequest) {
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
          }),
        }
        console.log("modification post ok "+themerequest.nom_thm+themerequest.libelle_thm);
        return this.http.post('http://localhost:8080/theme/add'+themerequest.nom_thm+themerequest.libelle_thm, httpOptions).pipe();
      }
    Modifthm(themerequest : Themerequest) {
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
          }),
        }
        console.log("modification post ok "+themerequest.nom_thm+themerequest.libelle_thm);
        return this.http.post('http://localhost:8080/theme/update/{id_Theme}'+themerequest.nom_thm+themerequest.libelle_thm, httpOptions).pipe();
      }
}
