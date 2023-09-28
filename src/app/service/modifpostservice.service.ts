import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modifpostrequest } from '../classe/modifpostrequest';

@Injectable({
  providedIn: 'root'
})
export class ModifpostserviceService {

  constructor(private http: HttpClient) { }
    Modifpost(modifpostrequest : Modifpostrequest) {
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
          }),
        }
        console.log("modification post ok "+modifpostrequest.source_post+modifpostrequest.libelle_post);
        return this.http.post('http://localhost:8080/post/update/'+modifpostrequest.titre_post, modifpostrequest, httpOptions).pipe();
      }
}
