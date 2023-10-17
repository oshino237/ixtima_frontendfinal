import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FuromserviceService {

  localUrl: string = 'http://localhost:8080'
  httpOptions = {
    headers: new HttpHeaders({
      "Content-type": "application/json",
      Authorization: "Bearer " + window.localStorage.getItem("token"),
    }),
  }

  constructor(private http: HttpClient) {
  }

  public createForums(forum: string, idusers: number): Observable<any> {
    return this.http.post<any>(`${this.localUrl}/forums`, {
      forum,
      idusers
    }, this.httpOptions);
  }

  public getAllForums(): Observable<any> {
    return this.http.get<any>(`${this.localUrl}/forums`, this.httpOptions);
  }

  public displayAllMessagesInForum(id: number): Observable<any> {
    return this.http.get<any>(`${this.localUrl}/forums/${id}/messages`, this.httpOptions);
  }

  public mssg_forum(message: string, sender_id: number, idforum: number): Observable<any> {
    return this.http.post<any>(`${this.localUrl}/mssg_forum`, {
      message,
      sender_id,
      idforum
    }, this.httpOptions);
  }


}
