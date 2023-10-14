import { Component } from '@angular/core';
import { Ajpost } from 'src/app/service/ajpost';

@Component({
  selector: 'app-postad',
  templateUrl: './postad.component.html',
  styleUrls: ['./postad.component.css']
})
export class PostadComponent {
  viewPostModel : any[]=[];
  constructor(private ajpostService : Ajpost){}  
  
  
  ngOnInit(): void {
    this.viewPost();
  }

  viewPost(){
    this.ajpostService.getListPost(2).subscribe((res : any ) =>{
        this.viewPostModel = res;
    })
    }
}
