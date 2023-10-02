import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Authrequest } from '../classe/authrequest';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) { }
  login(authRequest : Authrequest) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-type" : "application/json",
      
      }),
    }
    console.log("Auth service renvoie "+authRequest.password+authRequest.email);
    return this.http.post('http://localhost:8080/auth/authenticate', authRequest, httpOptions).pipe();
  }

}
