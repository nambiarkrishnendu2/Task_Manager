import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-form-step-one',
  templateUrl: './form-step-one.component.html',
  styleUrls: ['./form-step-one.component.css']
})
export class FormStepOneComponent {
  firstName = '';
  lastName = '';
  email = '';
  password = '';

  constructor(private router: Router, private signupService: SignupService) {}

  goToNext() {
    this.signupService.setStepOneData({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    });
    this.router.navigate(['/step-two']);
  }
}
