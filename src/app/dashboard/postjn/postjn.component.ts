import { Component } from '@angular/core';
import { Ajpost } from 'src/app/service/ajpost';

@Component({
  selector: 'app-postjn',
  templateUrl: './postjn.component.html',
  styleUrls: ['./postjn.component.css']
})
export class PostjnComponent {
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
