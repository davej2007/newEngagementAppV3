import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AUTH_Service } from '../../_AUTH_MODULE/auth.service';

@Component({
  selector: 'admin-super-user-nav-bar',
  templateUrl: './admin-super-user-nav-bar.component.html',
  styleUrls: ['./admin-super-user-nav-bar.component.css']
})
export class AdminSuperUserNavBarComponent {

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