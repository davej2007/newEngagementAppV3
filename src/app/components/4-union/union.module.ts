import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Union_Routing_Module } from './union-routing.module';
import { UnionNavBarComponent } from './union-nav-bar/union-nav-bar.component';


@NgModule({
  declarations: [
    UnionNavBarComponent
  ],
  imports: [
    CommonModule,
    Union_Routing_Module,
    NgbModule
  ],
  providers:[],
  exports:[
    UnionNavBarComponent
  ]
})
export class Union_Module { }
