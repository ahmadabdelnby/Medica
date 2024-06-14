import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, map, retry, throwError , BehaviorSubject} from 'rxjs';
import { User } from '../../Models/user';
import { environment } from '../../../environments/environment';
import { LoginToken } from '../../Models/login-token';
import { StorageService, USER_KEY } from '../Storage Service/storage.service';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUserSubject!: BehaviorSubject<User | null>;
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
  }

  

  Register(userRegData: User): Observable<any> {

    console.log(userRegData);
    return this.http.post<any>(
      `${environment.APIURL}/api/Auth/register`,
      userRegData,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
          Authorization : `Bearer ${this.storageService.getUser()}`
        }),
      }
    );
  }

  Login(username: string, password: string ): Observable<LoginToken> {
    return this.http.post<any>(`${environment.APIURL}/api/Auth/LogIn`, {
      username,
      password,
      
    },
    {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
        Authorization : `Bearer ${this.storageService.getUser()}`
      }),
    }

  );
  }

  resetPassword(email: string): Observable<any> {
    return this.http.post<any>('/api/resetPassword', { email });
  }

  verifyOTP(otp: string): Observable<any> {
    return this.http.post<any>('/api/verifyOTP', { otp });
  }


  public getCurrentUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  public setUser(user: User): void {
    this.currentUserSubject.next(user);
  }

}
