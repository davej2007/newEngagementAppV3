import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AUTH_Service } from '../../_AUTH_MODULE/auth.service';

@Component({
  selector: 'admin-supervisor-nav-bar',
  templateUrl: './admin-supervisor-nav-bar.component.html',
  styleUrls: ['./admin-supervisor-nav-bar.component.css']
})
export class AdminSupervisorNavBarComponent {

  constructor(
    public _AUTH:AUTH_Service
  ) { }

  // Variables
  public envName = environment.name;
  public showMainNav : Boolean = true;
  
  toggleCollapse() {
    this.showMainNav = !this.showMainNav;
  }
}