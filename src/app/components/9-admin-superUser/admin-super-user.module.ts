import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSuperUserRoutingModule } from './admin-super-user-routing.module';
import { AdminSuperUserNavBarComponent } from './admin-super-user-nav-bar/admin-super-user-nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AdminSuperUserNavBarComponent],
  imports: [
    CommonModule,
    AdminSuperUserRoutingModule,
    NgbModule
  ]
})
export class Admin_SuperUser_Module { }
