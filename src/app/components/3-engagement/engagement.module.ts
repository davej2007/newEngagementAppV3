import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Routing
import { Engagement_Routing_Module } from './engagement-routing.module';
// Services
import { AUTH_Service } from '../_AUTH_MODULE/auth.service';
import { AUTH_Guard } from '../_custom/guard/auth.guard';
// Components
import { EngagementNavBarComponent } from './engagement-nav-bar/engagement-nav-bar.component';

@NgModule({
  declarations: [
    EngagementNavBarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    Engagement_Routing_Module
  ],
  providers:[
    AUTH_Service,
    AUTH_Guard
  ],
  exports:[
    EngagementNavBarComponent
  ]
})
export class Engagement_Module { }