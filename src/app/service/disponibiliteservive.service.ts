import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Disponibiliterequest } from '../classe/disponibiliterequest';

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
      console.log("message envoye "+disponibiliterequest.date_debut_dispo,+disponibiliterequest.date_fin_dispo);
      return this.http.post('http://localhost:8080/disponibilite/add', httpOptions).pipe();
    }
  Modifdispo(disponibiliterequest : Disponibiliterequest) {
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type" : "application/json",
        }),
      }
      console.log("message envoye "+disponibiliterequest.date_debut_dispo,+disponibiliterequest.date_fin_dispo);
      return this.http.post('http://localhost:8080/disponibilite/update/{id}', httpOptions).pipe();
    }
}
