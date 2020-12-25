import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'admin-super-user-nav-bar',
  templateUrl: './admin-super-user-nav-bar.component.html',
  styleUrls: ['./admin-super-user-nav-bar.component.css']
})
export class AdminSuperUserNavBarComponent {

  constructor() { }

  // Variables
  public envName = environment.name;
  public showMainNav : Boolean = true;
  
  toggleCollapse() {
    this.showMainNav = !this.showMainNav;
  }
}