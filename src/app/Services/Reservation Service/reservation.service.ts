import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, retry, throwError ,of} from 'rxjs';
import { environment } from '../../../environments/environment';
import { Ireservation } from '../../Models/ireservation';
import {  Idepartment } from '../../Models/idepartment';
@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  // httpOptions;

  constructor(private http: HttpClient , 
    
  ) {
    // this.httpOptions = {
    //   headers: new HttpHeaders(
    //     {
    //       'Content-Type': 'application/json',
    //       Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmb3gzMDQ0IiwianRpIjoiNzkxN2Q0YzktZDk4Mi00NDQyLThjMzEtYzhiODc1YTg5OTk0IiwiZW1haWwiOiJhaG1hZGFsbmFqYXIxM0BnbWFpbC5jb20iLCJ1aWQiOiIxMjM0NTY3ODkxMDEyMyIsInJvbGVzIjoiVXNlciIsImV4cCI6MTcxNjA1Nzg1Nn0.hslwUiAz6H2OpenjeRqGjWOFGDSvRCDsIqvKD-3atVQ'
    //     }
    //   )
    // }
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
    // Check status code and perform actions
    // if (error.status === 404) {
    //   // Handle 404 Not Found error
    //   console.error(error.error)
    // } else if (error.status === 500) {
    //   // Handle 500 Internal Server Error
    //   console.error(error.error)
    // } else {
    //   // Handle other status codes
    // }

    // Throw the error to be caught by the subscriber
    return errorMessage;
  }

  newReservation(userReservation: Ireservation): Observable<any> {
    return this.http
      .post<any>(
        `${environment.APIURL}/api/Reservation/ClinicReservation`,JSON.stringify(userReservation),
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        }
      )
      .pipe(
        retry(2),
        catchError((error: HttpErrorResponse) => {
          // console.error(error.error); // Log the error message
          console.error(error.error); // Log the error message
          return throwError(error); // Rethrow the error to be caught by the subscriber
        })
      );
  }

  fetchReservations(
    page: number,
    pageSize: number /*searchQuery: string, selectedCategory: string, selectedSpecialty: string*/
  ): Observable<any> {
    const params = {
      page: page.toString(),
      pageSize: pageSize.toString(),
    };
    return this.http.get<any>(
      `${environment.APIURL}/api/Reservation/TodaysReservations`,
      { params }
    );
  }

  getReservationById(Id: string): Observable<Ireservation> {
    // userNationalId.toString;
    return this.http
      .get<Ireservation>(`${environment.APIURL}/api/Reservation/Get/${Id}`)
      .pipe(
        retry(2)
        // catchError(this.handleError)
      );
  }

  getAllDepartments(): Observable<any> {
    // console.log(`${environment.APIURL}/api/Department/All-Departments`);
    const response = this.http.get(
      `${environment.APIURL}/api/Department/All-Departments`
    );
    return response;
  }
}
