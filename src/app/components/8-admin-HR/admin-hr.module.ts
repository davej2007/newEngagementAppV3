import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHRRoutingModule } from './admin-hr-routing.module';
import { AdminHRNavBarComponent } from './admin-hr-nav-bar/admin-hr-nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AdminHRNavBarComponent],
  imports: [
    CommonModule,
    AdminHRRoutingModule,
    NgbModule
  ]
})
export class Admin_HR_Module { }
