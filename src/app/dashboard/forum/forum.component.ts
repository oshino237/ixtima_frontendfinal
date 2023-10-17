import {Component, OnInit} from '@angular/core';
import {Furomrequest} from 'src/app/classe/furomrequest';
import {FuromserviceService} from 'src/app/service/furomservice.service';
import {WebsocketService} from "../../service/websocket.service";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'app-forum', templateUrl: './forum.component.html', styleUrls: ['./forum.component.css']
})

export class ForumComponent implements OnInit {
  messg: Furomrequest = new Furomrequest();
  message: any[] = [];
  id: any;

  constructor(private forumservice: FuromserviceService, private webSocketServiceService: WebsocketService) {
    this.webSocketsChats();
  }

  ngOnInit(): void {
  }

  OnMessage() {
    console.log(this.messg);
  }

  createForums() {
    this.forumservice.createForums('discussion 1', 1)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      )
      .subscribe({
        next: (res) => {
          console.log('response', res)
        }
      })

  }

  getAllForums() {
    this.forumservice.getAllForums()
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      )
      .subscribe({
        next: (res) => {
          console.log('response', res)
        }
      })
  }

  displayAllMessagesInForum() {
    this.forumservice.displayAllMessagesInForum(1)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      )
      .subscribe({
        next: (res) => {
          console.log('response', res)
        }
      })
  }

  mssg_forum() {
    this.forumservice.mssg_forum('testing', 2, 1)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      )
      .subscribe({
        next: (res) => {
          console.log('response', res)
        }
      })
  }

  webSocketsChats() {
    let stompClient = this.webSocketServiceService.connect();
    stompClient.connect({}, () => {
      stompClient.subscribe('/topic/forum' + this.id, (notification: any) => {
        this.message.push(JSON.parse(notification.body));
      })
    })
  }
}
