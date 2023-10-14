import { Injectable } from '@angular/core';
import { Soustmrequest } from '../classe/soustmrequest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoustmserviceService {

  constructor(private http: HttpClient) { }
    Creesouthm(soustmrequest : Soustmrequest) {
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
          }),
        }
        console.log("modification post ok "+soustmrequest.nom_southm+soustmrequest.libelle_southm);
        return this.http.post('http://localhost:8080/sous_theme/add'+soustmrequest.nom_southm+soustmrequest.libelle_southm, httpOptions).pipe();
      }
    Modifsouthm(soustmrequest : Soustmrequest) {
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
          }),
        }
        console.log("modification post ok "+soustmrequest.nom_southm+soustmrequest.libelle_southm);
        return this.http.post('http://localhost:8080/sous_theme/update/{id_Sous_theme}'+soustmrequest.nom_southm+soustmrequest.libelle_southm, httpOptions).pipe();
      }
      getListsouTheme(id:number):Observable<Soustmrequest[]>{
        const token = window.localStorage.getItem("token")
      
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
            Authorization: "Bearer "+token,
          }),
        }
        return this.http.get<Soustmrequest[]>('http://localhost:8080/sous_theme/getAll',httpOptions);
      }
}
