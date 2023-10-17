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
  id: number = 1;
  pseudo: any;
  user_id: any;

  constructor(private forumservice: FuromserviceService, private webSocketServiceService: WebsocketService) {
    this.webSocketsChats();
  }

  ngOnInit(): void {
    // this.createForums();
    this.pseudo = localStorage?.getItem('pseudo');
    this.user_id = localStorage?.getItem('user_id');
    this.displayAllMessagesInForum();
  }

  OnMessage() {
    this.forumservice.mssg_forum(this.messg.libelle_messfor, this.user_id, 1)
      .pipe(
        catchError(error => {
          return throwError(error);
        })
      )
      .subscribe({
        next: (res) => {
          // this.displayAllMessagesInForum();
          this.webSocketsChats();
          this.messg = new Furomrequest();
        }
      });
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
          this.message = res;
        }
      })
  }


  webSocketsChats() {
    let stompClient = this.webSocketServiceService.connect();
    stompClient.connect({}, () => {
      stompClient.subscribe('/topic/forum/1', (notification: any) => {
        this.message=JSON.parse(notification.body);
        console.log('Message send ',this.message)
      })
    })
  }
}
