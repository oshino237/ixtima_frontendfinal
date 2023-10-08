import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnexionComponent } from './authComponent/connexion/connexion.component';
import { InscriptionComponent } from './authComponent/inscription/inscription.component';
import { AcceuilComponent } from './layout/acceuil/acceuil.component';
import { SensibilisationComponent } from './layout/sensibilisation/sensibilisation.component';
import { PostjnComponent } from './dashboard/postjn/postjn.component';
import { GerecmpjnComponent } from './dashboard/gerecmpjn/gerecmpjn.component';
import { ForumComponent } from './dashboard/forum/forum.component';
import { ConferjnComponent } from './dashboard/conferjn/conferjn.component';
import { RdvjnComponent } from './dashboard/rdvjn/rdvjn.component';
import { RdvmdComponent } from './dashboard/rdvmd/rdvmd.component';
import { ConfermdComponent } from './dashboard/confermd/confermd.component';
import { GerecmpmdComponent } from './dashboard/gerecmpmd/gerecmpmd.component';
import { PostmdComponent } from './dashboard/postmd/postmd.component';
import { ThemeComponent } from './dashboard/theme/theme.component';
import { PostadComponent } from './dashboard/postad/postad.component';
import { TracabiliteComponent } from './dashboard/tracabilite/tracabilite.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CmptmedComponent } from './dashboard/cmptmed/cmptmed.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgxAgoraSdkNgModule } from 'ngx-agora-sdk-ng';
// import { Router } from '@angular/router';
// import { catchError } from 'rxjs';
// import{DatePipe} from '@angular/common';
// import { MeetingPreviewComponent } from './dashboard/confermd/pages/meeting-preview/meeting-preview.component';
// import { RoundTranparentIconButtonComponent } from './dashboard/confermd/shared/components/round-tranparent-icon-button/round-tranparent-icon-button.component';
// import { InputOutputSettingsComponent } from './dashboard/confermd/shared/components/input-output-settings/input-output-settings.component';
// import { SoundVisualizerComponent } from './dashboard/confermd/shared/components/sound-visualizer/sound-visualizer.component';
// import { MeetingParticipantControlsComponent } from './dashboard/confermd/shared/components/meeting-participant-controls/meeting-participant-controls.component';
// import { MeetingParticipantComponent } from './dashboard/confermd/shared/components/meeting-participant/meeting-participant.component';
// import { MeetingControlsComponent } from './dashboard/confermd/shared/components/meeting-controls/meeting-controls.component';
// import { AgoraVideoPlayerDirective } from './dashboard/confermd/shared/directives/agora-video-player.directive';
// import { MeetingPageComponent } from './dashboard/confermd/pages/meeting-page/meeting-page.component';
// import { WelcomeComponent } from './dashboard/confermd/pages/welcome/welcome.component';
// import { CameraPreviewComponent } from './dashboard/confermd/shared/components/camera-preview/camera-preview.component';
// import { SoundMeterComponent } from './dashboard/confermd/shared/components/sound-meter/sound-meter.component';

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

    // MeetingPreviewComponent,
    // RoundTranparentIconButtonComponent,
    // InputOutputSettingsComponent,
    // SoundMeterComponent,
    // CameraPreviewComponent,
    // WelcomeComponent,
    // MeetingPageComponent,
    // AgoraVideoPlayerDirective,
    // MeetingControlsComponent,
    // MeetingParticipantComponent,
    // MeetingParticipantControlsComponent,
    // SoundVisualizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // NgxAgoraSdkNgModule.forRoot({
    //   AppID: '628bcaee33e84b0d9d8f94559c5b1969',
    //   Video: { codec: 'h264', mode: 'rtc', role: 'host' }
    // }),
    // FontAwesomeModule,
  
    // Router,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
