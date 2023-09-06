import { Component } from '@angular/core';
import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ixtima_frontendfinal';
  	constructor(config: NgbAccordionConfig) {
  		// customize default values of accordions used by this component tree
  		config.closeOthers = true;
  	}
  		images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
