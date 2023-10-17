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
      const token = window.localStorage.getItem("token")
      
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type" : "application/json",
          Authorization: "Bearer "+token,
        }),
      }
      return this.http.post('http://localhost:8080/theme/add',themerequest,httpOptions);
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

      // addTheme(theme: Themerequest){
      //   const token = window.localStorage.getItem("token")
      
      //   const httpOptions = {
      //     headers: new HttpHeaders({
      //       "Content-type" : "application/json",
      //       Authorization: "Bearer "+token,
      //     }),
      //   }
      //   return this.http.post('http://localhost:8080/theme/add',theme,httpOptions);
      // }

      deletethme(p:number){
        const token = window.localStorage.getItem("token")
      
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
            Authorization: "Bearer "+token,
          }),
        }
        
          console.log('impossible de supprimer');
          return this.http.delete(`http://localhost:8080/theme/delete/${p}`,httpOptions)
        
      }
}
