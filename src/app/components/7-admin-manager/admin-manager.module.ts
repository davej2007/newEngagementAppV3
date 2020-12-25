import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Admin_Manager_Routing_Module } from './admin-manager-routing.module';
import { AdminManagerNavBarComponent } from './admin-manager-nav-bar/admin-manager-nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AdminManagerNavBarComponent],
  imports: [
    CommonModule,
    Admin_Manager_Routing_Module,
    NgbModule
  ]
})
export class Admin_Manager_Module { }
