import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Engagement_Routing_Module } from './engagement-routing.module';
import { EngagementNavBarComponent } from './engagement-nav-bar/engagement-nav-bar.component';


@NgModule({
  declarations: [
    EngagementNavBarComponent
  ],
  imports: [
    CommonModule,
    Engagement_Routing_Module,
    NgbModule
  ],
  providers:[],
  exports:[
    EngagementNavBarComponent
  ]
})
export class Engagement_Module { }
