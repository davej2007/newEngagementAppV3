import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Management_Routing_Module } from './management-routing.module';
import { ManagementNavBarComponent } from './management-nav-bar/management-nav-bar.component';
import { AUTH_Service } from '../_AUTH_MODULE/auth.service';


@NgModule({
  declarations: [
    ManagementNavBarComponent
  ],
  imports: [
    CommonModule,
    Management_Routing_Module,
    NgbModule
  ],
  providers:[AUTH_Service],
  exports:[
    ManagementNavBarComponent
  ]
})
export class Management_Module { }
