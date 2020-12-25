import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../0-common/page-not-found/page-not-found.component';
import { PageUnderDevelopmentComponent } from '../0-common/page-under-development/page-under-development.component';
import { UserProfileComponent } from '../0-common/user-profile/user-profile.component';
import { UnionNavBarComponent } from './union-nav-bar/union-nav-bar.component';

const routes: Routes = [  // Union Root Routes
  { path   : '',                component : UnionNavBarComponent,   children: [
    { path : 'noticeboard',        component : PageUnderDevelopmentComponent},
    { path : 'usdaw', component : PageUnderDevelopmentComponent},
    { path : 'unite', component : PageUnderDevelopmentComponent},
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
export class Union_Routing_Module { }
