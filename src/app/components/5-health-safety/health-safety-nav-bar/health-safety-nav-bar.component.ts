import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AUTH_Service } from '../../_AUTH_MODULE/auth.service';

@Component({
  selector: 'health-safety-nav-bar',
  templateUrl: './health-safety-nav-bar.component.html',
  styleUrls: ['./health-safety-nav-bar.component.css']
})
export class HealthSafetyNavBarComponent {

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