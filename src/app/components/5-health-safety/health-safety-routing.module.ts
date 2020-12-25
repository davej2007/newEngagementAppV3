import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../0-common/page-not-found/page-not-found.component';
import { PageUnderDevelopmentComponent } from '../0-common/page-under-development/page-under-development.component';
import { UserProfileComponent } from '../0-common/user-profile/user-profile.component';
import { HealthSafetyNavBarComponent } from './health-safety-nav-bar/health-safety-nav-bar.component';

const routes: Routes = [  // Health & Safety Root Routes
  { path   : '',                component : HealthSafetyNavBarComponent,   children: [
    { path : 'noticeboard',        component : PageUnderDevelopmentComponent},
    { path : 'riskassesments', component : PageUnderDevelopmentComponent},
    { path : 'safesystems', component : PageUnderDevelopmentComponent},
    { path : 'contactus', component : PageUnderDevelopmentComponent},
    { path : 'userProfile',     component : UserProfileComponent},
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
export class HealthSafety_Routing_Module { }
