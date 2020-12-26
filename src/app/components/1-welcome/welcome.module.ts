import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Routing
import { Welcome_Routing_Module } from './welcome-routing.module';
// Services
import { AUTH_Service } from '../_AUTH_MODULE/auth.service';
// Components
import { WelcomeNavBarComponent } from './welcome-nav-bar/welcome-nav-bar.component';

@NgModule({
  declarations: [
    WelcomeNavBarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    Welcome_Routing_Module
  ],
  providers:[
    AUTH_Service
  ],
  exports:[
    WelcomeNavBarComponent
  ]
})
export class Welcome_Module { }