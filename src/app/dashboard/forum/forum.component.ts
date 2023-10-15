import {Component} from '@angular/core';
import {Furomrequest} from 'src/app/classe/furomrequest';
import {FuromserviceService} from 'src/app/service/furomservice.service';
import {WebsocketService} from "../../service/websocket.service";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})

export class ForumComponent {
  messg: Furomrequest = new Furomrequest();
  message: any[] = [];
  id: any;

  constructor(private forumservice: FuromserviceService, private webSocketServiceService: WebsocketService) {
    this.webSocketsChats();
  }

  OnMessage() {

    console.log(this.messg);
    this.forumservice.Forummess(this.messg).subscribe((res: any) => {
      console.log(res);
    });
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
