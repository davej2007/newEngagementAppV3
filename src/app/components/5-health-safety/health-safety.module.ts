import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Routing
import { HealthSafety_Routing_Module } from './health-safety-routing.module';
// Services
import { AUTH_Service } from '../_AUTH_MODULE/auth.service';
import { AUTH_Guard } from '../_custom/guard/auth.guard';
// Components
import { HealthSafetyNavBarComponent } from './health-safety-nav-bar/health-safety-nav-bar.component';

@NgModule({
  declarations: [
    HealthSafetyNavBarComponent
  ],
  imports: [
    CommonModule,
    HealthSafety_Routing_Module,
    NgbModule
  ],
  providers:[
    AUTH_Service,
    AUTH_Guard
  ],
  exports:[
    HealthSafetyNavBarComponent
  ]
})
export class Health_Safety_Module { }