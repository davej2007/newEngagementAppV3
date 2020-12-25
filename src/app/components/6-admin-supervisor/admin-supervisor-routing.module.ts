import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../0-common/page-not-found/page-not-found.component';
import { PageUnderDevelopmentComponent } from '../0-common/page-under-development/page-under-development.component';
import { AdminSupervisorNavBarComponent } from './admin-supervisor-nav-bar/admin-supervisor-nav-bar.component';

const routes: Routes = [  // Health & Safety Root Routes
  { path   : '',        component : AdminSupervisorNavBarComponent,   children: [
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
export class Admin_Supervisor_Routing_Module { }
