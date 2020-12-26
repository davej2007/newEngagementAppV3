import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Services
import { AUTH_Guard } from '../_custom/guard/auth.guard';
// Components
import { EngagementNavBarComponent } from './engagement-nav-bar/engagement-nav-bar.component';
import { UserProfileComponent } from '../0-common/user-profile/user-profile.component';

import { PageNotFoundComponent } from '../0-common/page-not-found/page-not-found.component';
import { PageUnderDevelopmentComponent } from '../0-common/page-under-development/page-under-development.component';

const routes: Routes = [  // Engagement Root Routes
  { path   : '',                  component : EngagementNavBarComponent,   children: [ // 7 to 12
    { path : 'noticeboard',       component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [1]}},
    { path : 'eventCalender',     component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [2]}},
    { path : 'button3',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [3]}},
    { path : 'button4',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [4]}},
    { path : 'button5',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [5]}},
    { path : 'button6',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [6]}},
    { path : 'userProfile',       component : UserProfileComponent,
                                  canActivate:[AUTH_Guard], data: {role: [0]}},
    { path : '',                  redirectTo: 'noticeboard', pathMatch: 'full' },
    { path : '**',                component : PageNotFoundComponent } ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Engagement_Routing_Module { }