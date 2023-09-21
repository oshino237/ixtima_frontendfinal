import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenProviderService {

  constructor(private http : HttpClient) { }
  getToken(){
    return this.http.get('api/token')
  }
}
