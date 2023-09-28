import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gcmptjnrequest } from '../classe/gcmptjnrequest';

@Injectable({
  providedIn: 'root'
})
export class GcmptjnserviceService {

  constructor(private http: HttpClient) { }
    Modifprofiljn(gcmptjnrequest : Gcmptjnrequest) {
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
          }),
        }
        console.log("modification profil ok "+gcmptjnrequest.firstname+gcmptjnrequest.lastname+gcmptjnrequest.sexe+gcmptjnrequest.telephone+gcmptjnrequest.pseudo+gcmptjnrequest.password+gcmptjnrequest.datenaiss);
        return this.http.post('http://localhost:8080/medecin/update/{id_Medecin}', httpOptions).pipe();
      }
}
