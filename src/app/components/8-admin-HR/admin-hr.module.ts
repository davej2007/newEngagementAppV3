import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Routing
import { Admin_HR_Routing_Module } from './admin-hr-routing.module';
// Services
import { AUTH_Service } from '../_AUTH_MODULE/auth.service';
// Components
import { AdminHRNavBarComponent } from './admin-hr-nav-bar/admin-hr-nav-bar.component';

@NgModule({
  declarations: [
    AdminHRNavBarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    Admin_HR_Routing_Module
  ],
  providers:[
    AUTH_Service
  ],
  exports:[
    AdminHRNavBarComponent
  ]
})
export class Admin_HR_Module { }