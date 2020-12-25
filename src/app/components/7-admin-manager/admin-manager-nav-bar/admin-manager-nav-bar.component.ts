import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'admin-manager-nav-bar',
  templateUrl: './admin-manager-nav-bar.component.html',
  styleUrls: ['./admin-manager-nav-bar.component.css']
})
export class AdminManagerNavBarComponent {

  constructor() { }

  // Variables
  public envName = environment.name;
  public showMainNav : Boolean = true;
  
  toggleCollapse() {
    this.showMainNav = !this.showMainNav;
  }
}