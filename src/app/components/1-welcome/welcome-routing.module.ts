import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Services
import { AUTH_Guard } from '../_custom/guard/auth.guard';
// Components
import { WelcomeNavBarComponent } from './welcome-nav-bar/welcome-nav-bar.component';
import { UserProfileComponent } from '../0-common/user-profile/user-profile.component';

import { PageNotFoundComponent } from '../0-common/page-not-found/page-not-found.component';
import { PageUnderDevelopmentComponent } from '../0-common/page-under-development/page-under-development.component';

const routes: Routes = [  // Welcome Root Routes
  { path   : '',                  component : WelcomeNavBarComponent,   children: [
    { path : 'siteInfo',          component : PageUnderDevelopmentComponent},
    { path : 'carouselDisplay',   component : PageUnderDevelopmentComponent},
    { path : 'userProfile',       component : UserProfileComponent,
                                  canActivate:[AUTH_Guard], data: {role: [0]}},
    { path : '',                  redirectTo: 'siteInfo', pathMatch: 'full' },
    { path : '**',                component : PageNotFoundComponent } ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Welcome_Routing_Module { }
