import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate {

  constructor(
    public router: Router
  ) { }

  canActivate() {
    console.log('InAuthGuard');
    if (localStorage.getItem('userName') && localStorage.getItem('password')) {
      return true;
    } else {
      this.router.navigate(['login']);
    }
  }

}
