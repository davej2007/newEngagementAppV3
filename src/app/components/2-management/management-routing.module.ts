import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../0-common/page-not-found/page-not-found.component';
import { PageUnderDevelopmentComponent } from '../0-common/page-under-development/page-under-development.component';
import { UserProfileComponent } from '../0-common/user-profile/user-profile.component';
import { ManagementNavBarComponent } from './management-nav-bar/management-nav-bar.component';

const routes: Routes = [  // Welcome Root Routes
  { path   : '',                component : ManagementNavBarComponent,   children: [ // 1 to 6
    { path : 'noticeboard',        component : PageUnderDevelopmentComponent},
    { path : 'rota', component : PageUnderDevelopmentComponent},
    { path : 'startTimes',     component : PageUnderDevelopmentComponent},
    { path : 'holidays', component : PageUnderDevelopmentComponent},
    { path : 'userProfile', component : UserProfileComponent},
    { path : '',                redirectTo: 'noticeboard', pathMatch: 'full' },
    { path : '**',              component : PageNotFoundComponent } ]
  }
];
// { path: 'startTimes', component: StartTimesComponent },
    // {path:'holiday',                  component:HolidayAvailabilityComponent},
    // {path:'button5',                  component:PageNotFoundComponent,        canActivate:[AuthGuard], data: {role: [5]} },

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Management_Routing_Module { }
