import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../0-common/page-not-found/page-not-found.component';
import { PageUnderDevelopmentComponent } from '../0-common/page-under-development/page-under-development.component';
import { UserProfileComponent } from '../0-common/user-profile/user-profile.component';
import { WelcomeNavBarComponent } from './welcome-nav-bar/welcome-nav-bar.component';

const routes: Routes = [  // Welcome Root Routes
  { path   : '',                component : WelcomeNavBarComponent,   children: [ // 1 to 6
    { path : 'siteInfo',        component : PageUnderDevelopmentComponent},
    { path : 'carouselDisplay', component : PageUnderDevelopmentComponent},
    { path : 'userProfile',     component : UserProfileComponent},
    { path : '',                redirectTo: 'siteInfo', pathMatch: 'full' },
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
export class Welcome_Routing_Module { }
