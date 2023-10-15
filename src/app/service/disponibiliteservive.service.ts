import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disponibiliterequest } from '../classe/disponibiliterequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisponibiliteserviveService {

  constructor(private http: HttpClient) { }
  Ajoutdispo(disponibiliterequest : Disponibiliterequest) {
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type" : "application/json",
        }),
      }
      console.log("message envoye ",disponibiliterequest);
      return this.http.post('http://localhost:8080/disponibilite/add', httpOptions);
    }
  Modifdispo(disponibiliterequest : Disponibiliterequest) {
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type" : "application/json",
        }),
      }
      console.log("message envoye ",disponibiliterequest);
      return this.http.post('http://localhost:8080/disponibilite/update/{id}', httpOptions);
    }
    getListdispo(id:number):Observable<Disponibiliterequest[]>{
      const token = window.localStorage.getItem("token")
    
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type" : "application/json",
          Authorization: "Bearer "+token,
        }),
      }
      // tttttttttttttttttttttttttttttt getalldispo tttttttttttttttttttttttttttttttttttt
      return this.http.get<Disponibiliterequest[]>('http://localhost:8080/theme/getAll',httpOptions);
    }
}
