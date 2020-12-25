import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Welcome_Routing_Module } from './welcome-routing.module';
import { WelcomeNavBarComponent } from './welcome-nav-bar/welcome-nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AUTH_Service } from '../_AUTH_MODULE/auth.service';



@NgModule({
  declarations: [
    WelcomeNavBarComponent
  ],
  imports: [
    CommonModule,
    Welcome_Routing_Module,
    NgbModule
  ],
  providers:[AUTH_Service],
  exports:[
    WelcomeNavBarComponent
  ]
})
export class Welcome_Module { }
