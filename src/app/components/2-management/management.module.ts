import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Routing
import { Management_Routing_Module } from './management-routing.module';
// Services
import { AUTH_Service } from '../_AUTH_MODULE/auth.service';
import { AUTH_Guard } from '../_custom/guard/auth.guard';
// Components
import { ManagementNavBarComponent } from './management-nav-bar/management-nav-bar.component';

@NgModule({
  declarations: [
    ManagementNavBarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    Management_Routing_Module
  ],
  providers:[
    AUTH_Service,
    AUTH_Guard
  ],
  exports:[
    ManagementNavBarComponent
  ]
})
export class Management_Module { }