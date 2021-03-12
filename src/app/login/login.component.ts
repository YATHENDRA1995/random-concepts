import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isSignUp = false;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  toggleComp(isLogin) {
    try {
      if (isLogin) {
        this.isSignUp = !this.isSignUp;
      }
    } catch (error) {
      console.log(error);
    }
  }

  login(event) {
    try {
      // Temporary Purpose
      localStorage.setItem('userName', event.userName);
      localStorage.setItem('password', event.password);
      this.router.navigate(['layout']);
    } catch (error) {
      console.log(error);
    }
  }

}
