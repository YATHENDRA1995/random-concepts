import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  @Output() loginFormToggle: EventEmitter<any> = new EventEmitter();
  @Output() loginFormData: EventEmitter<any> = new EventEmitter();

  // Template Driven Form
  @ViewChild('f') form: any;
  public loginForm = {
    userName: null,
    password: null
  };

  constructor() { }

  ngOnInit(): void {
  }

  goToSignUpPage() {
    try {
      this.loginFormToggle.emit(true);
    } catch (error) {
      console.log(error);
    }
  }

  // Login Submit
  onSubmit(formData) {
    try {
      if (this.form.valid) {
        this.form.reset();
        this.loginFormData.emit(formData);
      }
    } catch (error) {
      console.log(error);
    }
  }

}
