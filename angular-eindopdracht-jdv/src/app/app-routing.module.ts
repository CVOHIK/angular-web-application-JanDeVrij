import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SportlocatiesComponent } from './sportlocaties/sportlocaties.component';
import { VriendenComponent } from './vrienden/vrienden.component';
import { ProfielComponent } from './profiel/profiel.component';
import { VriendDetailsComponent } from './vriend-details/vriend-details.component';
import { LocatieService } from './locatie.service';
import { ZoekLocatieComponent } from './zoek-locatie/zoek-locatie.component';

const routes: Routes = [
  { path: '', component: SportlocatiesComponent },
      { path: 'sportlocaties', component: SportlocatiesComponent },
      { path: 'profiel', component: ProfielComponent },
      { path: 'vrienden', component: VriendenComponent },
      { path: 'vrienden/:vriendId', component: VriendDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }