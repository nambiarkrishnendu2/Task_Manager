import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-form-step-two',
  templateUrl: './form-step-two.component.html',
  styleUrls: ['./form-step-two.component.css']
})
export class FormStepTwoComponent {
  gender = '';
  homeState = '';
  skillLevel = '';
  dob: any;
  experience = '';

  constructor(private router: Router, private signupService: SignupService) {
    const stepOneData = this.signupService.getStepOneData();
    this.gender = '';
    this.homeState = '';
    this.skillLevel = '';
    this.dob = '';
    this.experience = '';
  }

  goToSubmit() {
    this.signupService.setStepTwoData({
      gender: this.gender,
      homeState: this.homeState,
      skillLevel: this.skillLevel,
      dob: this.dob,
      experience: this.experience
    });

    const allData = this.signupService.getAllData();

    // Submit all data to the server
    console.log('Submitting data:', allData);
    // Replace with actual HTTP request
    // this.http.post('your-api-endpoint', allData).subscribe(response => {
    //   this.router.navigate(['/afterlogin']);
    // });
    this.router.navigate(['/afterlogin']);
  }
}
