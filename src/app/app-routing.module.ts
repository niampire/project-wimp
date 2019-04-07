import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';


import { FoundComponent } from './page/found/found.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { HelpComponent } from './page/help/help.component';
// import { JoinComponent } from './page/join/join.component';
import { LoginComponent } from './page/login/login.component';


import { NgmodelComponent} from './page/found/ngmodel/ngmodel.component';
import { FormControlComponent} from './page/found/form-control/form-control.component';
import { FormGroupComponent} from './page/found/form-group/form-group.component';
import { NgmodelModule} from './page/found/ngmodel/ngmodel.module';
import { FormControlModule} from './page/found/form-control/form-control.module';
import { FormGroupModule} from './page/found/form-group/form-group.module';
const routes: Routes = [
  // {path: '', redirectTo: '/', pathMatch: 'full'},
  // {path: '**', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  // {path: '**', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'found', component: FoundComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'help', component: HelpComponent},
  // {path: 'join', component: JoinComponent},
  {path: 'login', component: LoginComponent},
  // {}
  { path: '', redirectTo: 'ng-model', pathMatch: 'full' },
  { path: 'ng-model', component: NgmodelComponent },
  { path: 'reactive-forms-control', component: FormControlComponent },
  { path: 'reactive-forms-group', component: FormGroupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }