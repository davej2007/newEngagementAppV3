import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../0-common/page-not-found/page-not-found.component';
import { PageUnderDevelopmentComponent } from '../0-common/page-under-development/page-under-development.component';
import { UserProfileComponent } from '../0-common/user-profile/user-profile.component';
import { EngagementNavBarComponent } from './engagement-nav-bar/engagement-nav-bar.component';

const routes: Routes = [  // Engagement Root Routes
  { path   : '',                component : EngagementNavBarComponent,   children: [ // 1 to 6
    { path : 'noticeboard',        component : PageUnderDevelopmentComponent},
    { path : 'eventCalender', component : PageUnderDevelopmentComponent},
    { path : 'others', component : PageUnderDevelopmentComponent},
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
export class Engagement_Routing_Module { }
