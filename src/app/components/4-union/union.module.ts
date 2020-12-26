import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Routing
import { Union_Routing_Module } from './union-routing.module';
// Services
import { AUTH_Service } from '../_AUTH_MODULE/auth.service';
import { AUTH_Guard } from '../_custom/guard/auth.guard';
// Components
import { UnionNavBarComponent } from './union-nav-bar/union-nav-bar.component';

@NgModule({
  declarations: [
    UnionNavBarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    Union_Routing_Module
  ],
  providers:[
    AUTH_Service,
    AUTH_Guard
  ],
  exports:[
    UnionNavBarComponent
  ]
})
export class Union_Module { }