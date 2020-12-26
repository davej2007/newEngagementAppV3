import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AUTH_Service } from '../../_AUTH_MODULE/auth.service';

@Injectable()

export class AUTH_Guard implements CanActivate {

  constructor (
    public _AUTH:AUTH_Service,
    public _ROUTER:Router
  ) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let x=route.data.role;
    if(this._AUTH.adminRights(x)){
      return true;
    } else {
      this._ROUTER.navigateByUrl('/')
    }
    return true;
  }
  
}
