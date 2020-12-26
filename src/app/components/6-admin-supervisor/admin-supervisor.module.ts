import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Routing
import { Admin_Supervisor_Routing_Module } from './admin-supervisor-routing.module';
// Services
import { AUTH_Service } from '../_AUTH_MODULE/auth.service';
// Components
import { AdminSupervisorNavBarComponent } from './admin-supervisor-nav-bar/admin-supervisor-nav-bar.component';

@NgModule({
  declarations: [
    AdminSupervisorNavBarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    Admin_Supervisor_Routing_Module
  ],
  providers:[
    AUTH_Service
  ],
  exports:[
    AdminSupervisorNavBarComponent
  ]
})
export class Admin_Supervisor_Module { }