import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../0-common/page-not-found/page-not-found.component';
import { PageUnderDevelopmentComponent } from '../0-common/page-under-development/page-under-development.component';
import { AdminSuperUserNavBarComponent } from './admin-super-user-nav-bar/admin-super-user-nav-bar.component';

const routes: Routes = [  // Super User Routes
  { path   : '',        component : AdminSuperUserNavBarComponent,   children: [
    { path : 'button1', component : PageUnderDevelopmentComponent},
    { path : 'button2', component : PageUnderDevelopmentComponent},
    { path : 'button3', component : PageUnderDevelopmentComponent},
    { path : 'button4', component : PageUnderDevelopmentComponent},
    { path : 'button5', component : PageUnderDevelopmentComponent},
    { path : 'button6', component : PageUnderDevelopmentComponent},
    { path : '',        redirectTo: 'button1', pathMatch: 'full' },
    { path : '**',      component : PageNotFoundComponent } ]
  }
];
// { path: 'startTimes', component: StartTimesComponent },
    // {path:'holiday',                  component:HolidayAvailabilityComponent},
    // {path:'button5',                  component:PageNotFoundComponent,        canActivate:[AuthGuard], data: {role: [5]} },

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Admin_Super_User_Routing_Module { }
