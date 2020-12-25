import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'engagement-nav-bar',
  templateUrl: './engagement-nav-bar.component.html',
  styleUrls: ['./engagement-nav-bar.component.css']
})
export class EngagementNavBarComponent {

  constructor() { }

  // Variables
  public envName = environment.name;
  public showMainNav : Boolean = true;
  
  toggleCollapse() {
    this.showMainNav = !this.showMainNav;
  }
}