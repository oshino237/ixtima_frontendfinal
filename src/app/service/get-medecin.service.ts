import { Injectable } from '@angular/core';
import { Utilisateurs } from '../classe/utilisateurs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMedecinService {

  constructor(private http: HttpClient, private tokenService : TokenService) { }
  Trouvemedecin():Observable<any>{
    const email = window.localStorage.getItem("email")
    const token = this.tokenService.getToken();
      const httpOptions = {
        headers: new HttpHeaders({
          // "Content-type" : "application/json",
          Authorization:"Bearer "+token,
        }),
      }
      console.log(" LE EMAIL QUI EST PASSE EST ",email)
      return this.http.get(`http://localhost:8080/utilisateurs/get/${email}`, httpOptions);
  }
}
