import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../Services/Auth Service/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OTPComponent {
  errorMessage: string = '';

  constructor(
    private authService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  verifyOTP(otp: string): void {
    if (!otp) {
      this.errorMessage = 'Please enter the OTP code.';
      return;
    }

    // Assuming authService.verifyOTP returns an Observable
    this.authService.verifyOTP(otp).subscribe(
      () => {
        // Navigate to the new password page if the OTP is correct
        this.router.navigate(['/newpassword']);
      },
      () => {
        this.errorMessage = 'Invalid OTP code. Please enter a valid code.';
      }
    );
  }
}
