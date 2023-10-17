import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Themerequest } from '../classe/themerequest';
import { Observable } from 'rxjs';

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
        return this.http.post('http://localhost:8080/theme/add'+themerequest.nom_thm+themerequest.libelle_thm, httpOptions).pipe();
      }
    Modifthm(themerequest : Themerequest) {
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
          }),
        }
        return this.http.post('http://localhost:8080/theme/update/{id_Theme}'+themerequest.nom_thm+themerequest.libelle_thm, httpOptions).pipe();
      }
      getListTheme(id:number):Observable<Themerequest[]>{
        const token = window.localStorage.getItem("token")

        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
            Authorization: "Bearer "+token,
          }),
        }
        return this.http.get<Themerequest[]>('http://localhost:8080/theme/getAll',httpOptions);
      }

}
