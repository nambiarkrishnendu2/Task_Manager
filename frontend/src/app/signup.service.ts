import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private stepOneData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  private stepTwoData = {
    gender: '',
    homeState: '',
    skillLevel: '',
    dob: '',
    experience: ''
  };

  setStepOneData(data: any) {
    this.stepOneData = data;
  }

  getStepOneData() {
    return this.stepOneData;
  }

  setStepTwoData(data: any) {
    this.stepTwoData = data;
  }

  getStepTwoData() {
    return this.stepTwoData;
  }

  getAllData() {
    return { ...this.stepOneData, ...this.stepTwoData };
  }
}
