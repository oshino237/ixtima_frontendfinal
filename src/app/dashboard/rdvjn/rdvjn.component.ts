import { Component } from '@angular/core';
import { DisponibiliteserviveService } from 'src/app/service/disponibiliteservive.service';

@Component({
  selector: 'app-rdvjn',
  templateUrl: './rdvjn.component.html',
  styleUrls: ['./rdvjn.component.css']
})
export class RdvjnComponent {
  constructor(private disponibiliteserviveService : DisponibiliteserviveService){}  
  viewdispoModel : any[]=[];
  
  ngOnInit(): void {
    this.viewdispo();
  }

  viewdispo(){
    this.disponibiliteserviveService.getListdispo(2).subscribe((res : any ) =>{
        this.viewdispoModel = res;
    })
    }
}
