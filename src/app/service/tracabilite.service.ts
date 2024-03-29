import { Injectable } from '@angular/core';
import { Utilisateurs } from '../classe/utilisateurs';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';
import { RegistRequest } from '../classe/regist-request';

@Injectable({
  providedIn: 'root'
})
export class TracabiliteService {
  

  constructor(private http: HttpClient, private tokenService : TokenService) { }
  getJeunesList(): Observable<Utilisateurs[]>{
    const token = this.tokenService.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        // "Content-type" : "application/json",
        Authorization:"Bearer "+token,
      }),
    }
    return this.http.get<Utilisateurs[]>('http://localhost:8080/utilisateurs/get/all', httpOptions);
  }
  getListmed():Observable<RegistRequest[]>{
    const token = window.localStorage.getItem("token")
  
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type" : "application/json",
        Authorization: "Bearer "+token,
      }),
    }
    return this.http.get<RegistRequest[]>('http://localhost:8080/medecin/getAll',httpOptions);
  }
}
