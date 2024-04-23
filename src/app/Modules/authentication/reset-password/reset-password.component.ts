import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../Services/Auth Service/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  errorMessage: string = '';

  constructor(
    private authService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  resetPassword(email: string): void {
    if (!email) {
      this.errorMessage = 'Please enter your email address.';
      return;
    }

    this.authService.resetPassword(email).subscribe(
      () => {
        // Navigate to the OTP page if the email is correct
        this.router.navigate(['/otp']);
      },
      () => {
        this.errorMessage = 'Invalid email. Please enter a valid email.';
      }
    );
  }
}
