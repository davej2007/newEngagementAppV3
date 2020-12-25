import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path   : 'management',  loadChildren : () => import(`./components/2-management/management.module`).then(m => m.Management_Module) },    
  {path   : 'engagement',  loadChildren : () => import(`./components/3-engagement/engagement.module`).then(m => m.Engagement_Module) },    
  {path   : 'union',       loadChildren : () => import(`./components/4-union/union.module`).then(m => m.Union_Module) },    
  {path   : 'healthsafety',loadChildren : () => import(`./components/5-health-safety/health-safety.module`).then(m => m.Health_Safety_Module) },    
  {path   : 'admin',       children     : [
    {path : 'supervisor',  loadChildren : () => import(`./components/6-admin-supervisor/admin-supervisor.module`).then(m => m.Admin_Supervisor_Module) },
    {path : 'manager',     loadChildren : () => import(`./components/7-admin-manager/admin-manager.module`).then(m => m.Admin_Manager_Module) },
    {path : 'hr',          loadChildren : () => import(`./components/8-admin-HR/admin-hr.module`).then(m => m.Admin_HR_Module) },
    {path : 'superuser',   loadChildren : () => import(`./components/9-admin-superUser/admin-super-user.module`).then(m => m.Admin_SuperUser_Module) }
  ]},
  {path   : '',            loadChildren : () => import(`./components/1-welcome/welcome.module`).then(m => m.Welcome_Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }