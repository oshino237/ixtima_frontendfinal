import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  getToken(){
    return window.localStorage.getItem('token');
  }
  hasToken(){
    return this.getToken() != null;
  }
  log_out(): void {
   window.localStorage.clear()
  }
}
