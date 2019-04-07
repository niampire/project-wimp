import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FoundComponent } from './page/found/found.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { HelpComponent } from './page/help/help.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { ImageComponent } from './page/gallery/image/image.component';
import { MapComponent } from './page/gallery/map/map.component';
import { FilterComponent } from './page/gallery/filter/filter.component';
// import { ValidationService } from './validation.service';

import { FormControlComponent } from './page/found/form-control/form-control.component';
import { NgmodelComponent } from './page/found/ngmodel/ngmodel.component';
import { FormGroupComponent } from './page/found/form-group/form-group.component';
import { FormControlModule} from './page/found/form-control/form-control.module';
import { FormGroupModule} from './page/found/form-group/form-group.module';
import { NgmodelModule } from './page/found/ngmodel/ngmodel.module';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    FoundComponent,
    GalleryComponent,
    HelpComponent,
    HomeComponent,
    LoginComponent,
    ImageComponent,
    MapComponent,
    FilterComponent,
    FormControlComponent,
    NgmodelComponent,
    FormGroupComponent,
    // ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYGVs9mWDS-kphq4z7Fx7aGEYHik71MSs'
    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
