import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gcmptmedrequest } from '../classe/gcmptmedrequest';

@Injectable({
  providedIn: 'root'
})
export class GcmptmedserviceService {

  constructor(private http: HttpClient) { }
    Modifprofil(gcmptmedrequest : Gcmptmedrequest) {
        const httpOptions = {
          headers: new HttpHeaders({
            "Content-type" : "application/json",
          }),
        }
        console.log("modification profil ok "+gcmptmedrequest.nom_hopital+gcmptmedrequest.firstname+gcmptmedrequest.lastname+gcmptmedrequest.sexe+gcmptmedrequest.telephone+gcmptmedrequest.pseudo+gcmptmedrequest.specialite+gcmptmedrequest.password+gcmptmedrequest.datenaiss);
        return this.http.post('http://localhost:8080/medecin/update/{id_Medecin}', httpOptions).pipe();
      }
}
