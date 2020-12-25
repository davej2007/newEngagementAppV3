import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'union-nav-bar',
  templateUrl: './union-nav-bar.component.html',
  styleUrls: ['./union-nav-bar.component.css']
})
export class UnionNavBarComponent {

  constructor() { }

  // Variables
  public envName = environment.name;
  public showMainNav : Boolean = true;
  
  toggleCollapse() {
    this.showMainNav = !this.showMainNav;
  }
}