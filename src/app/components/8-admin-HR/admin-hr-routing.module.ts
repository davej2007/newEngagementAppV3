import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Services
import { AUTH_Guard } from '../_custom/guard/auth.guard';
// Components
import { AdminHRNavBarComponent } from './admin-hr-nav-bar/admin-hr-nav-bar.component';

import { PageNotFoundComponent } from '../0-common/page-not-found/page-not-found.component';
import { PageUnderDevelopmentComponent } from '../0-common/page-under-development/page-under-development.component';

const routes: Routes = [  // Admin - HR Level 3 Routes
  { path   : '',                  component : AdminHRNavBarComponent,   children: [ // 37 to 42
    { path : 'button1',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [37]}},
    { path : 'button2',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [38]}},
    { path : 'button3',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [39]}},
    { path : 'button4',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [40]}},
    { path : 'button5',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [41]}},
    { path : 'button6',           component : PageUnderDevelopmentComponent,
                                  canActivate:[AUTH_Guard], data: {role: [42]}},
    { path : '',                  redirectTo: 'button1', pathMatch: 'full' },
    { path : '**',                component : PageNotFoundComponent } ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Admin_HR_Routing_Module { }