import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { AjpostRequest } from "../classe/ajpost-request";

@Injectable({
    providedIn: 'root'
  })
export class Ajpost {
    constructor(private http: HttpClient) { }
    Ajoutpost(ajpostRequest : AjpostRequest) {
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
          }),
        }
        console.log("ajout post ok "+ajpostRequest.source_post+ajpostRequest.date_creation_post+ajpostRequest.libelle_post);
        return this.http.post('http://localhost:8080/post/add', ajpostRequest, httpOptions).pipe();
      }
}
