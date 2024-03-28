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
      next: (token: LoginToken) => {
        // Token generated, handle successful login
        console.log('Login successful. Token:', token.loginToken);
        // Save token to local storage or session storage
        localStorage.setItem('token', token.loginToken);
      },
      error: (error: any) => {
        // Handle login error
        console.error('Login failed:', error);
      }
    };

    this.authService.Login(username, password).subscribe(observer);
  }



}
