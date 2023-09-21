import { Component } from '@angular/core';
import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginserviceService } from './service/loginservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ixtima_frontendfinal';
  	constructor( private login: LoginserviceService) {
  		//config: NgbAccordionConfig,config.closeOthers = true; customize default values of accordions used by this component tree
  		
  	}
	ngOninit(){}
  		images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
