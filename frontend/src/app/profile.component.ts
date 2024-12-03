import { Component } from '@angular/core';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
 
  email: string = 'test@gmail.com';
  mobile: string = '9999999999';
  age: number = 25; 
  gender: string = 'Male'; 
  homeState: string = 'Kerala'; 
  skillLevel: string = 'Beginner'; 
 
  nationalRank: string = 'Rank';
  stateRank: string = 'Rank';
 
  isEditMode: boolean = false;
 
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
 
  onSubmit() {
    if (this.isEditMode) {
      console.log('Profile Updated');
      console.log(`Email: ${this.email}`);
      console.log(`Mobile: ${this.mobile}`);
      console.log(`Age: ${this.age}`);
      console.log(`Gender: ${this.gender}`);
      console.log(`Home State: ${this.homeState}`);
      console.log(`Skill Level: ${this.skillLevel}`);
      this.toggleEditMode(); 
      this.toggleEditMode(); 
    }
  }
 
  updateAgeValue() {
    // This function can be used to perform any additional logic related to age changes if needed.
  }
 
  updateRank(rankType: string) {
    if (rankType === 'national') {
      this.nationalRank = 'Updated National Rank';
    } else if (rankType === 'state') {
      this.stateRank = 'Updated State Rank';
    }
  }
}