import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Services
import { AUTH_Guard } from '../_custom/guard/auth.guard';
// Components
import { UnionNavBarComponent } from './union-nav-bar/union-nav-bar.component';
import { UserProfileComponent } from '../0-common/user-profile/user-profile.component';

import { PageNotFoundComponent } from '../0-common/page-not-found/page-not-found.component';
import { PageUnderDevelopmentComponent } from '../0-common/page-under-development/page-under-development.component';

const routes: Routes = [  // Union Root Routes
  { path   : '',                  component : UnionNavBarComponent,   children: [ // 13 to 18
    { path : 'noticeboard',       component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [13]}},
    { path : 'usdaw',             component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [14]}},
    { path : 'unite',             component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [15]}},
    { path : 'contactus',         component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [16]}},
    { path : 'button5',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [17]}},
    { path : 'button6',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [18]}},
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
export class Union_Routing_Module { }
