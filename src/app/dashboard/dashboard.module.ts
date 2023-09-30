import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DashboardComponent} from "./dashboard.component";
import { GerecmpadComponent } from './gerecmpad/gerecmpad.component';
import { CycleComponent } from './cycle/cycle.component';
import { CmptmedComponent } from './cmptmed/cmptmed.component';


@NgModule({
  declarations: [
    GerecmpadComponent,
    CycleComponent,
    CmptmedComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule {

}
