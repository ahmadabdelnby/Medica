import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css'],
})
export class NewPasswordComponent {
  errorMessage: string = '';

  constructor(private router: Router) {}

  saveNewPassword(newPassword: string, reEnterPassword: string): void {
    if (!newPassword || !reEnterPassword) {
      this.errorMessage = 'Please enter both passwords.';
      return;
    }

    if (newPassword !== reEnterPassword) {
      this.errorMessage =
        'Passwords do not match. Please enter the same password in both fields.';
      return;
    }

    if (!this.isPasswordValid(newPassword)) {
      this.errorMessage =
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
      return;
    }

    // Passwords are valid, navigate to login page
    this.router.navigate(['/login']);
  }

  private isPasswordValid(password: string): boolean {
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
  }
}
