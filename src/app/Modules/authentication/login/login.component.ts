import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../Services/authentication.service';
import { LoginToken } from '../../../Models/login-token';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { error } from 'console';
import { Subscription } from 'rxjs';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy, OnInit {
  loginSubscription!: Subscription;
  constructor(private authService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private router: Router,
    //  loginSubscription :Subscription
  ) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

    this.loginSubscription;
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    // this.loginSubscription.unsubscribe;
  }

  login(username: string, password: string): void {
    const observer = {
      next: (token:any) => {
        // Token generated, handle successful login
        console.log('Login successful. Token:', token.data.token);
        // Save token to cookies with secure flag and HttpOnly flag
        document.cookie = `token=${token.data.token}; expires=${new Date(Date.now() + 86400000).toUTCString()}; path=/; secure; HttpOnly`;
      },
      error: (error: any) => {
        // Handle login error
        console.error('Login failed:', error);
        // Show error message to the user
        this._snackBar.open('Login failed. Please try again.', 'Close', {
          duration: 5000,
        });
      }
        };

    this.authService.Login(username, password).subscribe(observer);
  }



}
