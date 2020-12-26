import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Services
import { AUTH_Guard } from '../_custom/guard/auth.guard';
// Components
import { AdminSupervisorNavBarComponent } from './admin-supervisor-nav-bar/admin-supervisor-nav-bar.component';

import { PageNotFoundComponent } from '../0-common/page-not-found/page-not-found.component';
import { PageUnderDevelopmentComponent } from '../0-common/page-under-development/page-under-development.component';

const routes: Routes = [  // Admin - Supervisor Level 1 Routes
  { path   : '',                  component : AdminSupervisorNavBarComponent,   children: [ // 25 to 30
    { path : 'button1',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [25]}},
    { path : 'button2',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [26]}},
    { path : 'button3',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [27]}},
    { path : 'button4',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [28]}},
    { path : 'button5',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [29]}},
    { path : 'button6',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [30]}},
    { path : '',                  redirectTo: 'button1', pathMatch: 'full' },
    { path : '**',                component : PageNotFoundComponent } ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Admin_Supervisor_Routing_Module { }