import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, retry, throwError } from 'rxjs';
import { User } from '../Models/user';
import { environment } from '../../environments/environment.development';
import { LoginToken } from '../Models/login-token';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // httpOptions;

  constructor(private http: HttpClient) {
    // this.httpOptions = {
    //   headers: new HttpHeaders(
    //     {
    //       'Content-Type': 'application/json'
    //     }
    //   )
    // }
  }
  public getToken(): string |null{
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }
  private handleError(error: HttpErrorResponse) {
    console.log('Error:', error);
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);

    // Check status code and perform actions
    if (error.status === 404) {
      // Handle 404 Not Found error
      console.error(error.error);
      
    } else if (error.status === 500) {
      // Handle 500 Internal Server Error
      console.error(error.error);
    } else {
      // Handle other status codes
    }

    // Throw the error to be caught by the subscriber
    return throwError(errorMessage);
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return this.tokenNotExpired(token);
  }

  Register(userRegData: User): Observable<any> {
    console.log(userRegData)
    return this.http
      .post<any>(`${environment.APIURL}/api/Auth/register`, JSON.stringify(userRegData));
  }

  Login(username: string, password: string): Observable<LoginToken> {
    return this.http
      .post<any>(`${environment.APIURL}/api/Auth/LogIn`, { username, password });
  }
  private tokenNotExpired(token: string | null): boolean {
    return token !== null && token !== '';
 }
  // Logout() {

  // }

}

