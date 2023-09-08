import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './layout/acceuil/acceuil.component';
import { SensibilisationComponent } from './layout/sensibilisation/sensibilisation.component';
import { ConnexionComponent } from './authComponent/connexion/connexion.component';
import { InscriptionComponent } from './authComponent/inscription/inscription.component';
import { PostjnComponent } from './dashboard/postjn/postjn.component';
import { PostmdComponent } from './dashboard/postmd/postmd.component';
import { GerecmpjnComponent } from './dashboard/gerecmpjn/gerecmpjn.component';
import { GerecmpmdComponent } from './dashboard/gerecmpmd/gerecmpmd.component';
import { ForumComponent } from './dashboard/forum/forum.component';
import { ConferjnComponent } from './dashboard/conferjn/conferjn.component';
import { ConfermdComponent } from './dashboard/confermd/confermd.component';
import { RdvjnComponent } from './dashboard/rdvjn/rdvjn.component';
import { RdvmdComponent } from './dashboard/rdvmd/rdvmd.component';
import { ThemeComponent } from './dashboard/theme/theme.component';
import { SousthmComponent } from './dashboard/sousthm/sousthm.component';
import { TracabiliteComponent } from './dashboard/tracabilite/tracabilite.component';
import { ComptusrComponent } from './dashboard/comptusr/comptusr.component';
import { PostadComponent } from './dashboard/postad/postad.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

const routes: Routes = [

  {path:'accueil' ,component : AcceuilComponent},
  {path:'sensibilisation' ,component : SensibilisationComponent},
  {path:'connexion' ,component : ConnexionComponent},
  {path:'inscription' ,component : InscriptionComponent},
  {path:'postjn' ,component : PostjnComponent},
  {path:'postmd' ,component : PostmdComponent},
  {path:'gerecmpjn' ,component : GerecmpjnComponent},
  {path:'gerecmpmd' ,component : GerecmpmdComponent},
  {path:'forum' ,component : ForumComponent},
  {path:'conferjn' ,component : ConferjnComponent},
  {path:'confermd' ,component : ConfermdComponent},
  {path:'rdvjn' ,component : RdvjnComponent},
  {path:'rdvmd' ,component : RdvmdComponent},
  {path:'theme' ,component : ThemeComponent},
  {path:'sousthm' ,component : SousthmComponent},
  {path:'tracabilite' ,component : TracabiliteComponent},
  {path:'comptusr' ,component : ComptusrComponent},
  {path:'postad' ,component : PostadComponent},
  {path:'header' ,component : HeaderComponent},
  {path:'footer' ,component : FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
