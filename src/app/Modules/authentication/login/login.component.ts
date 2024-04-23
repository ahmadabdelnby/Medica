import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../Services/Auth Service/authentication.service';
import { LoginToken } from '../../../Models/login-token';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { error } from 'console';
import { Subscription } from 'rxjs';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { StorageService } from '../../../Services/Storage Service/storage.service';
import { UserRole } from '../../../Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy, OnInit {
  userRoles = Object.values(UserRole);
  selectedUserRole!: UserRole;
  loginSubscription!: Subscription;
  constructor(private authService: AuthenticationService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private storageService: StorageService
    //  loginSubscription :Subscription
  ) { }
  ngOnInit(): void {

    this.loginSubscription;
  }

  ngOnDestroy(): void {
    // if (this.loginSubscription) {
    //   this.loginSubscription.unsubscribe();
    // }
  }

  login(username: string, password: string ): void {
    const observer = {
      next: (token:any) => {
        this.storageService.saveUser(token.data.token);
        console.log('Token saved to storage.' , this.storageService.getUser());
      },
      error: (error: any) => {
        console.error('Login failed:', error);
        this._snackBar.open('Login failed. Please try again.', 'Close', {
          duration: 5000,
        });
      }
        };
        // this.loginSubscription =
    this.authService.Login(username, password).subscribe(observer);
  }



}
