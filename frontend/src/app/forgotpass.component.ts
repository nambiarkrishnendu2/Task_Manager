import { Component } from '@angular/core';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotPassComponent {
  email: string = '';

  onSubmit() {
    if (this.email) {
      // Here you would handle the email submission, like sending it to your backend
      console.log('Email submitted:', this.email);
      alert('Password reset link has been sent to your email.');
    }
  }
}
