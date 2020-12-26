import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Routing
import { Admin_Super_User_Routing_Module } from './admin-super-user-routing.module';
// Services
import { AUTH_Service } from '../_AUTH_MODULE/auth.service';
// Components
import { AdminSuperUserNavBarComponent } from './admin-super-user-nav-bar/admin-super-user-nav-bar.component';

@NgModule({
  declarations: [
    AdminSuperUserNavBarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    Admin_Super_User_Routing_Module
  ],
  providers:[
    AUTH_Service
  ],
  exports:[
    AdminSuperUserNavBarComponent
  ]
})
export class Admin_SuperUser_Module { }