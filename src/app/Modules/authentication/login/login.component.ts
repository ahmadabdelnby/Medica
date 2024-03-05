import { Component } from '@angular/core';
import { AuthenticationService } from '../../../Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService : AuthenticationService){}

  login() {
    this.authService.login({ username: 'user', password: 'password' }).subscribe(response => {
      console.log('Login successful', response);
    }, error => {
      console.error('Login failed', error);
    });
  }

  logout() {
    this.authService.logout().subscribe(response => {
      console.log('Logout successful', response);
    }, error => {
      console.error('Logout failed', error);
    });
  }

}
