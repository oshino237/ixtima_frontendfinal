import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DashboardComponent} from "./dashboard.component";
import { GerecmpadComponent } from './gerecmpad/gerecmpad.component';
import { CycleComponent } from './cycle/cycle.component';
import {NgxAgoraSdkNgModule} from "ngx-agora-sdk-ng";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";


@NgModule({
  declarations: [
    GerecmpadComponent,
    CycleComponent,

  ],
  imports: [
    NgbModule,
    BrowserModule,
    ReactiveFormsModule,
    NgxAgoraSdkNgModule.forRoot({
      AppID: '628bcaee33e84b0d9d8f94559c5b1969',
      Video: { codec: 'h264', mode: 'rtc', role: 'host' }
    }),
    // FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule {

}
