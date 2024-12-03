import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  users: any[] = [];

  constructor(private router: Router, private ngZone: NgZone) {
    this.initializeUsers();
  }

  ngOnInit() {
    this.initializeGoogleSignIn();
  }

  initializeUsers() {
    this.users = [{ email: 'test@example.com', password: 'testpassword' }];
  }

  initializeGoogleSignIn() {
    window['google'].accounts.id.initialize({
      client_id: '122116782830-t3mefbm4v2fi4b4ke5m40sn144se1c5j.apps.googleusercontent.com',
      callback: this.handleCredentialResponse.bind(this)
    });
  }

  handleCredentialResponse(response: any) {
    console.log('Google Sign-In response:', response);
    this.ngZone.run(() => {
      // Handle the response here, e.g., send it to your server for verification
      this.router.navigate(['/afterlogin']); // Navigate to the /afterlogin on successful login
    });
  }

  signInUser() {
    const user = this.users.find(u => u.email === this.email);
    if (user && user.password === this.password) {
      console.log('Sign-In successful');
      this.ngZone.run(() => {
        this.router.navigate(['/afterlogin']);
      });
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }

  onSignIn() {
    console.log('Sign In clicked');
    this.signInUser();
  }

  onForgotPassword() {
    console.log('Forgot password clicked');
    // Implement forgot password logic
  }

  onGoogleSignIn() {
    console.log('Google Sign In clicked');
    window['google'].accounts.id.prompt((notification: any) => {
      if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
        console.log('Google One Tap was not displayed or was skipped');
      }
    });
  }

  onAppleSignIn() {
    console.log('Apple Sign In clicked');
    // Implement Apple Sign-In logic
  }

  onSignUp() {
    console.log('Sign Up clicked');
    this.router.navigate(['/step-one']);
  }
}
