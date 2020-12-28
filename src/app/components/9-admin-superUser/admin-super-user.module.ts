import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Routing
import { Admin_Super_User_Routing_Module } from './admin-super-user-routing.module';
// Services
import { AUTH_Service } from '../_AUTH_MODULE/auth.service';
import { AUTH_Guard } from '../_custom/guard/auth.guard';
// Components
import { AdminSuperUserNavBarComponent } from './admin-super-user-nav-bar/admin-super-user-nav-bar.component';
import { CreateNewSiteComponent } from './create-new-site/create-new-site.component';
import { CreateNewEmployeeComponent } from './create-new-employee/create-new-employee.component';
import { CreateNewRotaComponent } from './create-new-rota/create-new-rota.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminSuperUserNavBarComponent,
    CreateNewSiteComponent,
    CreateNewEmployeeComponent,
    CreateNewRotaComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    Admin_Super_User_Routing_Module,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    AUTH_Service,
    AUTH_Guard
  ],
  exports:[
    AdminSuperUserNavBarComponent
  ]
})
export class Admin_SuperUser_Module { }