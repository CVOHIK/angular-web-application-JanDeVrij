import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule }     from './app-routing.module';
import { MaterialModule } from "./material/material.module";

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SportlocatiesComponent } from './sportlocaties/sportlocaties.component';
import { VriendenComponent } from './vrienden/vrienden.component';
import { VriendDetailsComponent } from './vriend-details/vriend-details.component';
import { LocatieService } from './locatie.service';
import { ZoekLocatieComponent } from './zoek-locatie/zoek-locatie.component';
import { ProfielComponent } from './profiel/profiel.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpcz4zxy3kX5Ao61RezEjKkjtOKs0t9-w'
    }),
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    SportlocatiesComponent,
    VriendenComponent,
    VriendDetailsComponent,
    ZoekLocatieComponent,
    ProfielComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [LocatieService]
})
export class AppModule { }
