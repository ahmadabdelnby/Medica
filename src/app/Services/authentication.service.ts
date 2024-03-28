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
  httpOptions;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        }
      )
    }
  }
  private handleError(error: HttpErrorResponse) {
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


  Register(userRegData: User): Observable<any> {
    //  return this.http.post<User>('http://medicalsystem-001-site1.ftempurl.com/swagger/v1/swagger.json/api/Auth/register',JSON.stringify(userRegData), this.httpOptions);
    return this.http
      .post<any>(`${environment.APIURL}/api/Auth/register`, JSON.stringify(userRegData))
      .pipe(
        catchError(this.handleError)
      )
  }

  Login(username: string, password: string): Observable<LoginToken> {
    return this.http
      .post<any>(`${environment.APIURL}/api/Auth/token`, { username, password })
      .pipe(
        map(response => response.token as LoginToken),
        catchError(this.handleError)
      )
  }

  // Logout() {

  // }

}
