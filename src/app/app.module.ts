import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Common_Module } from './components/0-common/common.module';
import { Welcome_Module } from './components/1-welcome/welcome.module';
import { Management_Module } from './components/2-management/management.module';
import { Engagement_Module } from './components/3-engagement/engagement.module';
import { Union_Module } from './components/4-union/union.module';
import { Health_Safety_Module } from './components/5-health-safety/health-safety.module';
import { Admin_Supervisor_Module } from './components/6-admin-supervisor/admin-supervisor.module';
import { Admin_Manager_Module } from './components/7-admin-manager/admin-manager.module';
import { Admin_HR_Module } from './components/8-admin-HR/admin-hr.module';
import { Admin_SuperUser_Module } from './components/9-admin-superUser/admin-super-user.module';
import { AUTH_Module } from './components/_AUTH_MODULE/AUTH.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    AUTH_Module, Common_Module,
    HttpClientModule, // HTTP client
    FormsModule, ReactiveFormsModule, // Forms
    // FileUploadModule,  // ng file upload
    Welcome_Module, Management_Module, Engagement_Module,
    Union_Module, Health_Safety_Module,
    Admin_Supervisor_Module, Admin_Manager_Module,
    Admin_HR_Module,
    Admin_SuperUser_Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
