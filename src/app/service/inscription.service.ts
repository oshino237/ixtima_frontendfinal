import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistRequest } from '../classe/regist-request';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor(private http: HttpClient) { }
  inscription(registRequest : RegistRequest) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type" : "application/json",
      }),
    }
    console.log("l'iscrition ok"+registRequest.password+registRequest.email+registRequest.telephone);
    return this.http.post('http://localhost:8080/auth/register', registRequest, httpOptions).pipe();
  }
}
