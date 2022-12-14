import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsloggedGuard implements CanLoad {
  constructor(private router: Router){
  }


  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLogged: boolean = false;

    if (localStorage.getItem('Token')) {
      return isLogged = true;
    }

    else{
      this.router.navigate(['authentification']);
      return isLogged = false;
    };

  };
};



