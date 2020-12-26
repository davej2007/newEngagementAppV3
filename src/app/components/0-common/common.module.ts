import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Services

// Components
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageUnderDevelopmentComponent } from './page-under-development/page-under-development.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    PageUnderDevelopmentComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[],
  exports:[
    PageNotFoundComponent,
    PageUnderDevelopmentComponent,
    UserProfileComponent
  ]
})
export class Common_Module { }