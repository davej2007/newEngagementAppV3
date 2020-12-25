import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Admin_Supervisor_Routing_Module } from './admin-supervisor-routing.module';
import { AdminSupervisorNavBarComponent } from './admin-supervisor-nav-bar/admin-supervisor-nav-bar.component';


@NgModule({
  declarations: [AdminSupervisorNavBarComponent],
  imports: [
    CommonModule,
    Admin_Supervisor_Routing_Module,
    NgbModule
  ]
})
export class Admin_Supervisor_Module { }
