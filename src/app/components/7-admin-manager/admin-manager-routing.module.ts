import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Services
import { AUTH_Guard } from '../_custom/guard/auth.guard';
// Components
import { AdminManagerNavBarComponent } from './admin-manager-nav-bar/admin-manager-nav-bar.component';

import { PageNotFoundComponent } from '../0-common/page-not-found/page-not-found.component';
import { PageUnderDevelopmentComponent } from '../0-common/page-under-development/page-under-development.component';

const routes: Routes = [  // Admin - Manager Level 2 Routes
  { path   : '',                  component : AdminManagerNavBarComponent,   children: [ // 31 to 36
    { path : 'button1',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [31]}},
    { path : 'button2',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [32]}},
    { path : 'button3',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [33]}},
    { path : 'button4',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [34]}},
    { path : 'button5',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [35]}},
    { path : 'button6',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [36]}},
    { path : '',                  redirectTo: 'button1', pathMatch: 'full' },
    { path : '**',                component : PageNotFoundComponent } ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Admin_Manager_Routing_Module { }