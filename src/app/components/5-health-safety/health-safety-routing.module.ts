import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Services
import { AUTH_Guard } from '../_custom/guard/auth.guard';
// Components
import { HealthSafetyNavBarComponent } from './health-safety-nav-bar/health-safety-nav-bar.component';
import { UserProfileComponent } from '../0-common/user-profile/user-profile.component';

import { PageNotFoundComponent } from '../0-common/page-not-found/page-not-found.component';
import { PageUnderDevelopmentComponent } from '../0-common/page-under-development/page-under-development.component';

const routes: Routes = [  // Health & Safety Routes
  { path   : '',                  component : HealthSafetyNavBarComponent,   children: [ // 19 to 24
    { path : 'noticeboard',       component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [19]}},
    { path : 'riskAssesments',    component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [20]}},
    { path : 'safeSystems',       component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [21]}},
    { path : 'contactUs',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [22]}},
    { path : 'button5',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [23]}},
    { path : 'button6',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [24]}},
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
export class HealthSafety_Routing_Module { }