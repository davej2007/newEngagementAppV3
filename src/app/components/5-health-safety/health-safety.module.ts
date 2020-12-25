import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HealthSafety_Routing_Module } from './health-safety-routing.module';
import { HealthSafetyNavBarComponent } from './health-safety-nav-bar/health-safety-nav-bar.component';


@NgModule({
  declarations: [HealthSafetyNavBarComponent],
  imports: [
    CommonModule,
    HealthSafety_Routing_Module,
    NgbModule
  ]
})
export class Health_Safety_Module { }
