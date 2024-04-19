import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { User } from '../Models/user';
import { environment } from '../../environments/environment.development';
import { LoginToken } from '../Models/login-token';
import { StorageService, USER_KEY } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  

  constructor(private http: HttpClient,private storageService: StorageService) {
  }

  Register(userRegData: User): Observable<any> {
    console.log(userRegData);
    return this.http.post<any>(
      `${environment.APIURL}/api/Auth/register`,
      userRegData,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'}),
      }
    );
  }

  Login(username: string, password: string): Observable<LoginToken> {
    return this.http.post<any>(`${environment.APIURL}/api/Auth/LogIn`, {
      username,
      password,
    });
  }
  
  // Logout() {

  // }
}
