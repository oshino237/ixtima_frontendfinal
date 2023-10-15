import {Injectable} from '@angular/core';

var SockJs = require('sockjs-client');
var Stomp = require('stompjs');

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  localUlr: string = 'http://localhost:8080'

  constructor() {
  }

  public connect() {
    let socket = SockJs('http://localhost:8080/socket');
    let stompClient = Stomp.over(socket);
    return stompClient;
  }
}
