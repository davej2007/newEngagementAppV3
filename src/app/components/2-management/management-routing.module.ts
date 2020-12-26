import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Services
import { AUTH_Guard } from '../_custom/guard/auth.guard';
// Components
import { ManagementNavBarComponent } from './management-nav-bar/management-nav-bar.component';
import { UserProfileComponent } from '../0-common/user-profile/user-profile.component';

import { PageNotFoundComponent } from '../0-common/page-not-found/page-not-found.component';
import { PageUnderDevelopmentComponent } from '../0-common/page-under-development/page-under-development.component';

const routes: Routes = [  // Management Routes
  { path   : '',                  component : ManagementNavBarComponent,   children: [ // 1 to 6
    { path : 'noticeboard',       component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [1]}},
    { path : 'rota',              component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [2]}},
    { path : 'startTimes',        component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [3]}},
    { path : 'holidays',          component : PageUnderDevelopmentComponent,
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
export class Management_Routing_Module { }