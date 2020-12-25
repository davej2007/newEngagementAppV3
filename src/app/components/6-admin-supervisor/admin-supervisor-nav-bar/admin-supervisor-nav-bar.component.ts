import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'admin-supervisor-nav-bar',
  templateUrl: './admin-supervisor-nav-bar.component.html',
  styleUrls: ['./admin-supervisor-nav-bar.component.css']
})
export class AdminSupervisorNavBarComponent {

  constructor() { }

  // Variables
  public envName = environment.name;
  public showMainNav : Boolean = true;
  
  toggleCollapse() {
    this.showMainNav = !this.showMainNav;
  }
}