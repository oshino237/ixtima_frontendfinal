import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Furomrequest } from '../classe/furomrequest';

@Injectable({
  providedIn: 'root'
})
export class FuromserviceService {

  constructor(private http: HttpClient) { }
  Forummess(forumrequest : Furomrequest) {
      const httpOptions = {
        headers: new HttpHeaders({
          "Content-type" : "application/json",
        }),
      }
      console.log("message envoye "+forumrequest.libelle_messfor);
      return this.http.post('http://localhost:8080/mssg_forum/add', httpOptions).pipe();
    }
}
