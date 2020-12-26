import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AUTH_Service } from '../../_AUTH_MODULE/auth.service';

@Component({
  selector: 'union-nav-bar',
  templateUrl: './union-nav-bar.component.html',
  styleUrls: ['./union-nav-bar.component.css']
})
export class UnionNavBarComponent {

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