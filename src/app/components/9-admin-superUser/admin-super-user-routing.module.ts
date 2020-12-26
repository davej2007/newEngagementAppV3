import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Services
import { AUTH_Guard } from '../_custom/guard/auth.guard';
// Components
import { AdminSuperUserNavBarComponent } from './admin-super-user-nav-bar/admin-super-user-nav-bar.component';

import { PageNotFoundComponent } from '../0-common/page-not-found/page-not-found.component';
import { PageUnderDevelopmentComponent } from '../0-common/page-under-development/page-under-development.component';

const routes: Routes = [  // Admin - Super User Level 4 Routes
  { path   : '',                  component : AdminSuperUserNavBarComponent,   children: [ // 43 to 48
    { path : 'button1',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [43]}},
    { path : 'button2',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [44]}},
    { path : 'button3',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [45]}},
    { path : 'button4',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [46]}},
    { path : 'button5',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [47]}},
    { path : 'button6',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [48]}},
    { path : '',                  redirectTo: 'button1', pathMatch: 'full' },
    { path : '**',                component : PageNotFoundComponent } ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Admin_Super_User_Routing_Module { }