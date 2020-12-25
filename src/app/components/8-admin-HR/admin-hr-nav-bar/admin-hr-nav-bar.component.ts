import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'admin-hr-nav-bar',
  templateUrl: './admin-hr-nav-bar.component.html',
  styleUrls: ['./admin-hr-nav-bar.component.css']
})
export class AdminHRNavBarComponent {

  constructor() { }

  // Variables
  public envName = environment.name;
  public showMainNav : Boolean = true;
  
  toggleCollapse() {
    this.showMainNav = !this.showMainNav;
  }
}