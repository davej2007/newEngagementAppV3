import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Routing
import { Admin_Manager_Routing_Module } from './admin-manager-routing.module';
// Services
import { AUTH_Service } from '../_AUTH_MODULE/auth.service';
import { AUTH_Guard } from '../_custom/guard/auth.guard';
// Components
import { AdminManagerNavBarComponent } from './admin-manager-nav-bar/admin-manager-nav-bar.component';

@NgModule({
  declarations: [
    AdminManagerNavBarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    Admin_Manager_Routing_Module
  ],
  providers:[
    AUTH_Service,
    AUTH_Guard
  ],
  exports:[
    AdminManagerNavBarComponent
  ]
})
export class Admin_Manager_Module { }