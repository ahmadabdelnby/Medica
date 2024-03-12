import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../../Services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { User } from '../../../Models/user';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user:User = {
    nid: '',
    username: '',
    name: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: ''

  };

  constructor(private authService:AuthenticationService, 
              private _snackBar:MatSnackBar,
              private router:Router) { }

  submitForm() {
    const regData = this.user;
    
    const observer={
      next : (userReg:User)=>{
        this._snackBar.open(
          'Registration Complete' , 'Done' ,{
            duration:3000,
          }
        ),
        this.router.navigateByUrl('/Home')
      },
      error: (err:Error)=>{
        console.log(err.message);
        this._snackBar.open(
          'Registration Field' , 'Done' ,{
            duration:3000,
          }
        )
      }
      

      }

    this.authService.Register(regData).subscribe(observer)
  }

}
