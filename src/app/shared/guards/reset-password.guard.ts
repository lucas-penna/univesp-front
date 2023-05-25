import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordGuard implements CanActivate, Resolve<String> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): String | Observable<String> | Promise<String> {
    if (route.params && route.params['token']) {
      return route.params['token'];
    }
    return "";
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
