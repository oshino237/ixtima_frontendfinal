import { Component } from '@angular/core';

@Component({
  selector: 'app-sensibilisation',
  templateUrl: './sensibilisation.component.html',
  styleUrls: ['./sensibilisation.component.css']
})
export class SensibilisationComponent {
R = window.localStorage.getItem("role")
}
