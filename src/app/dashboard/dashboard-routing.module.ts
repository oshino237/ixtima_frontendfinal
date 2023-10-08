import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {CycleComponent} from "./cycle/cycle.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
