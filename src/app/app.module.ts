import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ConnexionComponent} from './authComponent/connexion/connexion.component';
import {InscriptionComponent} from './authComponent/inscription/inscription.component';
import {AcceuilComponent} from './layout/acceuil/acceuil.component';
import {SensibilisationComponent} from './layout/sensibilisation/sensibilisation.component';
import {PostjnComponent} from './dashboard/postjn/postjn.component';
import {GerecmpjnComponent} from './dashboard/gerecmpjn/gerecmpjn.component';
import {ForumComponent} from './dashboard/forum/forum.component';
import {ConferjnComponent} from './dashboard/conferjn/conferjn.component';
import {RdvjnComponent} from './dashboard/rdvjn/rdvjn.component';
import {RdvmdComponent} from './dashboard/rdvmd/rdvmd.component';
import {ConfermdComponent} from './dashboard/confermd/confermd.component';
import {GerecmpmdComponent} from './dashboard/gerecmpmd/gerecmpmd.component';
import {PostmdComponent} from './dashboard/postmd/postmd.component';
import {ThemeComponent} from './dashboard/theme/theme.component';
import {PostadComponent} from './dashboard/postad/postad.component';
import {TracabiliteComponent} from './dashboard/tracabilite/tracabilite.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {CmptmedComponent} from './dashboard/cmptmed/cmptmed.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WebsocketService} from "./service/websocket.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ConnexionComponent,
    InscriptionComponent,
    AcceuilComponent,
    SensibilisationComponent,
    PostjnComponent,
    GerecmpjnComponent,
    ForumComponent,
    ConferjnComponent,
    RdvjnComponent,
    RdvmdComponent,
    ConfermdComponent,
    GerecmpmdComponent,
    PostmdComponent,
    ThemeComponent,
    PostadComponent,
    TracabiliteComponent,
    HeaderComponent,
    FooterComponent,
    CmptmedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    WebsocketService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
