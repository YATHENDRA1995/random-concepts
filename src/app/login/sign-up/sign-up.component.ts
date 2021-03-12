import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Output() signUpToggle: EventEmitter<boolean> = new EventEmitter();

  // Model Driven Form (Sign Up Form)
  public myform: FormGroup;
  public userName: FormControl;
  public password: FormControl;
  public email: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.createFormControls();
    this.initializeSignUpForm();
  }

  goToLogin() {
    try {
      this.signUpToggle.emit(true);
    } catch (error) {
      console.log(error);
    }
  }

  createFormControls() {
    try {
      this.userName = new FormControl("", Validators.required);
      this.password = new FormControl("", Validators.required);
      this.email = new FormControl("", [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]); 
    } catch (error) {
      console.log(error);
    }
  }

  initializeSignUpForm() {
    try {
      this.myform = new FormGroup({
        userName: this.userName,
        password: this.password,
        email: this.email
      }); 
    } catch (error) {
      console.log(error);
    }
  }

  signUpSubmit() {
    try {
      if (this.myform.valid) {
        console.log(this.myform.value);
        this.goToLogin();
        this.myform.reset();
      }
    } catch (error) {
      console.log(error);
    }
  }

}
