import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DashboardComponent} from "./dashboard.component";


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule {
}
